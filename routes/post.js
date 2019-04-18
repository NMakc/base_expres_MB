const express = require ('express')

const router = express.Router()


const { Post } = require ('../models/post');

router.get('/posts',(req,res) => {
    Post.find({},(err,post) => {
        if(err) return res.status(400).send (err);
        res.status(200).send(post)
    })
   
})

// router.get('/posts', (req, res) => res.send('Работает!'))



module.exports =  router