const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must be a valid Email address'],
        },
        posts:[
            {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
        friends:[{
            type:Schema.Types.ObjectId,
            ref: 'User',
        }]
    },
    {

        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
