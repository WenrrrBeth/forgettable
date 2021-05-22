import mongoose from "mongoose";
import Forgettable from "../models/forgettable.js";
import Profile from "../models/profile.js";

export const postevent = async (req, res) => {
    const forgettable = req.body;

    try {
        const newFgtb = new Forgettable({ ...forgettable, createdAt: new Date().toISOString() });
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
        const unsharedFgtb = await Forgettable.find({ by: _id, shared: false });
        res.status(200).json(unsharedFgtb);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const getSharedPosts = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const sharedFgtb = await Forgettable.find({ by: _id, shared: true });
        res.status(200).json(sharedFgtb);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const getAllSharedPosts = async (req, res) => {
    try {
        const allSharedFgtbs = await Forgettable.find({ shared: true });
        res.status(200).json(allSharedFgtbs);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { pid: _id } = req.params;

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
