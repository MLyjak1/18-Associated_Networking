const router = require('express').Router();
const { getPosts, getSinglePost, createPost, updatePost, deletePost } = require('../../controllers/postController');

// /api/posts/
router.route('/')
    .get(getPosts)
    .post(createPost);

// /api/posts/:postId
router.route('/:postId')
    .get(getSinglePost)
    .delete(deletePost)
    .put(updatePost);


module.exports = router;