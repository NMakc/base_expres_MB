const mongoose = require ('mongoose');

const postSchema=mongoose.Schema({
    title:{
       required: true,
       type: String
    },
    description:{
        required: true,
       type: String
    },  
    createdAt:{
        type: Number
     }


})
const Post= mongoose.model('Post', postSchema);
module.exports = { Post }