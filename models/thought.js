const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        assignmentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        creayedAt: {
         /*Date
Set default value to the current timestamp
Use a getter method to format the timestamp on query*/
        },
        username:{
            type: String,
            required: true,
        },
        reactions: {
            //Array of nested documents created with the reactionSchema
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = thoughtSchema;