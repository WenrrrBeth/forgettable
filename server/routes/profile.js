import express from "express";
import { signin, signup, updateprofile, getprofile } from "../controllers/profile.js";

const router = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/:id", updateprofile);
router.get("/:id", getprofile)

export default router;
