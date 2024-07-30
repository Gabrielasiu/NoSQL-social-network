// const { Schema, model, Types } = require('mongoose');

// const reactionSchema = new Schema({
//     reactionId: {
//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId(),
//     },
//     reactionBody: {
//         type: String,
//         required: true,
//         maxlength: 280,
//     },
//     username: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (timestamp) => dateFormat(timestamp),
//     }
// });

// const thoughtSchema = new Schema(
//     {
//         assignmentId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId(),
//         },
//         thoughtText: {
//             type: String,
//             required: true,
//             maxlength: 280,
//             minlength: 1,
//         },
//         // createdAt: {
//         //     type: Date,
//         //     default: Date.now,
//         //     get: (timestamp) => dateFormat(timestamp),
//         // },
//         username:{
//             type: String,
//             required: true,
//         },
//         reactions: [reactionSchema],
//     },
//     {
//         toJSON: {
//             getters: true,
//         },
//         id: false,
//     }
// );

// const Thought = model ('Thought', thoughtSchema);

// module.exports = { Thought, thoughtSchema, reactionSchema};