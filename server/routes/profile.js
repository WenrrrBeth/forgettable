import express from "express";
import { signin, signup, googleSignin, updateprofile, getprofile } from "../controllers/profile.js";

const router = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);
router.post("/googlesignin", googleSignin)
router.patch("/:id", updateprofile);
router.get("/:id", getprofile)

export default router;
