const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId(),
            default: () => new Types.ObjectId(),    
        },
        reactionText:{
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
    
    },
    {

        toJSON: {
            getters: true,
        },
        id: false,
    }
);


module.exports = reactionSchema;