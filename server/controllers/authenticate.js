import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Profile from "../models/profile.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        //check whether the email exist
        const registeredUser = await Profile.findOne({ email });
        if(!registeredUser) return res.status(404).json({ message: "User doesn't exist." });

        console.log(process.env.JWS_EXPIRES_IN);

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
        res.status(200).json({ result, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
}
