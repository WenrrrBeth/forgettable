import mongoose from "mongoose";
import Forgettable from "../models/forgettable.js";

export const postevent = async (req, res) => {
    const forgettable = req.body;

    try {
        if (!forgettable.image.data || !forgettable.image.filetype || !forgettable.title ) res.status(400).json({ msessage: "Insufficient information."})
        const idx = await Forgettable.countDocuments();
        const newFgtb = new Forgettable({ ...forgettable, by: req.profileId, createdAt: new Date().toISOString(), index: idx+1 });
        await newFgtb.save();
        res.status(201).json({ newFgtb })
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message })
    }
}

export const getUnsharedPosts = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const unsharedFgtb = await Forgettable.find({ by: _id, shared: false }).sort({ createdAt: "desc" });
        // const reverseUnshared = unsharedFgtb.sort({createdAt: -1});
        res.status(200).json(unsharedFgtb);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const getSharedPosts = async (req, res) => {
    // const { pids } = req.body;
    const { id: _id } = req.params;
    try {
        const sharedFgtb = await Forgettable.find({ by: _id, shared: true }).sort({ createdAt: "desc" });
        // const reverseShared = sharedFgtb.sort({createdAt: -1});
        res.status(200).json(sharedFgtb);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const getAllSharedPosts = async (req, res) => {
    const arr =  Array.from({length: 30}, () => Math.floor(Math.random()*29));
    const uniqueArr = arr.filter((el, idx, self) => {
        return idx === self.indexOf(el);
    })

    try {
        const allSharedFgtbs = await Forgettable.find({ shared: true, 'index': { $in: uniqueArr } }); //.select('-image.data');
        res.status(200).json(allSharedFgtbs);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { pid: _id } = req.params;

    if(!req.profileId) return res.json({ message: "Not authenticated" });

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post found");

    const post = req.body;

    const updatePost = await Forgettable.findByIdAndUpdate(
        _id,
        post,
        {new: true}
    )

    res.json(updatePost);
}

export const getSavedPost = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const savedFgtb = await Forgettable.find({ saves: _id });
        res.status(200).json(savedFgtb);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

// export const getImages = async (req, res) => {
//     const { pids } = req.body;
//     try {
//         const image = await Forgettable.find({'_id': { $in: pids }}).select('id image.data')
//         res.status(200).json(image);
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({ message: error.message });
//     }
// }
