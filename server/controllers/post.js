import mongoose from "mongoose";
import Forgettable from "../models/forgettable.js";
import Profile from "../models/profile.js";

export const postevent = async (req, res) => {
    const { _id: id } = req.params; 
    const forgettable = req.body;
    const { by, shared } = req.body;

    try {
        // for profile that matches by
        // if shared is false:
        // profile.personal = [...profile.personal, forgettable._id]
        // else if shared post is true:
        // profile.personal = [...profile.personal, forgettable._id]
        // profile.shared = [...profile.personal, forgettable._id]
        const _pid = mongoose.mongo.ObjectId(by);
        const poster = await Profile.findById({ _pid });
        const newFgtb = new Forgettable({ ...forgettable, createdAt: new Date().toISOString(), id });

        if (!poster) res.states(404).send("No profile with that id.");

        if (shared) {
            poster.personal = [ ...poster.personal, id ];
            poster.shared = [ ...poster.shared, id ];
        } else {
            poster.personal = [ ...poster.personal, id ];
        }
        
        await poster.save();
        res.json(poster);

        await newFgtb.save();
        res.status(201).json(newFgtb);
    } catch (error) {
        console.log("Error in postEvent:")
        console.log(error);
        res.status(409).json({ message: error.message })
    }
}
