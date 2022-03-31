import express from 'express';
import { getPosts, createPosts, updatePost,deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/create", createPosts);
router.patch('/edit/:id', updatePost)
router.delete('/delete/:id', deletePost)

export default router;