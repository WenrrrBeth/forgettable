import express from "express";
import { postevent, getUnsharedPosts, getSharedPosts, getAllSharedPosts, updatePost, getSavedPost, getlgImage } from "../controllers/post.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();
router.post("/", authenticate, postevent);
router.get("/:id/unshared", getUnsharedPosts);
router.get("/:id/shared", getSharedPosts);
router.get("/shares", getAllSharedPosts);
router.get("/:pid/lgimage", getlgImage);
router.patch("/:pid", authenticate, updatePost);
router.get("/:id/saved", getSavedPost);

export default router;
