import express from "express";
import { postevent, getUnsharedPosts, getSharedPosts, getAllSharedPosts, updatePost, getSavedPost } from "../controllers/post.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();
router.post("/", postevent);
router.get("/:id/unshared", getUnsharedPosts);
router.get("/:id/shared", getSharedPosts);
router.get("/shares", getAllSharedPosts);
router.patch("/:pid", updatePost);
router.get("/:id/saved", getSavedPost);

export default router;
