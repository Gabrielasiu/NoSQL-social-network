
// importando directamente las clases Schema y model del paquete mongoose
const { Schema, model} = require('mongoose');
//const thoughtSchema = require('./thought');  // Referencia al esquema de pensamiento

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email address']
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }], // Referencia al esquema de pensamiento
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // Referencia al modelo de usuario
  }],
}, 
{
  toJSON: {
    virtuals: true,
  },
  id: false
}
);
//Virtual for friendCount
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


const User = model('User', userSchema);

module.exports = { User };