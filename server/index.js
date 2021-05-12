import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

import profileRoutes from "./routes/profile.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true })) // limit image size
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })) // setting up bodyParser for post req
app.use(cors()) // for cross origin req

app.use("/profile", profileRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((e) => console.log(e.message));

mongoose.set("useFindAndModify", false);
