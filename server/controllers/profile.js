import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Profile from "../models/profile.js";
import mongoose from "mongoose";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        //check whether the email exist
        const registeredUser = await Profile.findOne({ email });
        if(!registeredUser) return res.status(404).json({ message: "User doesn't exist." });

        // check if the password is correct
        const checkPassword = await bcrypt.compare(password, registeredUser.password);
        if(!checkPassword) return res.status(404).json({ message: "Incorrect password." });

        //signing the json web token
        const token = jwt.sign(
            { email: registeredUser.email, id: registeredUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWS_EXPIRES_IN }
        )
        res.status(200).json({ result: registeredUser, token })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong, please try again."});
    }
};

export const signup = async (req, res) => {
    const { email, preferredName, password, confirmPassword } = req.body;

    try {
        // email that match the email client entered, registeredUser exist meaning signup email already exist
        const registeredUser = await Profile.findOne({ email });
        if (registeredUser) return res.status(400).json({ message: "Email already exist, please sign in instead."});

        // check if client entered the password twice correctly
        if (password !== confirmPassword) return res.status(400).json({ message: "Password does not match." });

        // adding user to the database
        const hashPassword = await bcrypt.hash(password, 12);
        const result = await Profile.create({
            email,
            name: preferredName,
            password: hashPassword,
        });
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWS_EXPIRES_IN });
        res.status(200).json({ result, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
}

export const updateprofile = async (req, res) => {
    const { id: _id } = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No user with that id");

    const updatedUser = await Profile.findByIdAndUpdate(
        _id,
        { ...user, _id },
        { new: true }
    );

    res.json(updatedUser);
};

export const getprofile = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const profile = await Profile.findById(_id);
        res.status(200).json(profile);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}
