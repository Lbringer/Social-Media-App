import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';

//router
const router = express.Router();

//routes
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);


export default router;