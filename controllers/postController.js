const {Post, User} = require('../models');

module.exports = {
  getPosts(req, res) {
    Post.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
  getSinglePost(req, res) {
    Post.findOne({ _id: req.params.postId }) // from the routes
      .select('-__v')
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No post with this ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  createPost(req, res) {
    Post.create(req.body)
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => res.status(500).json(err));
  },
  updatePost(req, res) {
    Post.findOneandUpdate({ _id: req.params.postId }, {$set: req.body.postText}, { runValidators: true, new: true})
    .then((post) => !post
    ? res.status(404).json({message: ' No post with this ID'})
    :res.json(post))
    .catch((err) => res.status(500).json(err));
    },

deletePost(req, res){
    Post.findOneandDelete({ _id: req.params.postId})
    .then((post) =>
    !post
          ? res.status(404).json({ message: 'No post with this ID' })
          : res.json({ message: 'User and posts removed' }))
      .catch((err) => res.status(500).json(err));
  },
};
