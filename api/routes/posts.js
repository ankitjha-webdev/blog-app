const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Create post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Update post
router.put('/:id', async (req, res) =>{

        try {
            const post = await Post.findById(req.params.id);
            if (post.username === req.body.username) {
                try {
               const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
               }, { new: true }
               );
               res.status(200).json(`Post updated successfully ${updatedPost}`);
                } catch (error) {
                    res.status(500).json(error);
                }  
            } else {
                res.status(401).json('Unauthorized user to update this post');
            }
           
        } catch (error) {
            res.status(500).json(error);
        }
    
})

// Delete post

router.delete('/:id', async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                await post.delete();
                res.status(200).json("Post deleted successfully");
            } catch (error) {
                res.status(500).json(error);
            }
        } else{
            res.status(401).json('Unauthorized user to delete this post');
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// Get post
router.get('/:id', async (req, res) =>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        
    }
})

module.exports = router;