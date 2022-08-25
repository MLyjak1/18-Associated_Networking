const { Schema, model } = require('mongoose');
// const reactionSchema = require('./reaction');
const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: 'Needs an input',
            minLength: 5,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName:
            {
            type: String,
        },
        // reactions:[
        // reactionSchema    
        // ]
    },
    {

        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// postSchema
//     .virtual('reactionCount')
//     .get(function () {
//         return this.reactions.length;
//     });


const Post = model('Post', postSchema);

module.exports = Post;