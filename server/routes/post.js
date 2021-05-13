import express from "express";
import { postevent } from "../controllers/post.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();
router.post("/", postevent);

export default router;
