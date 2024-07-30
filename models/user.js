
//         type: Schema.Types.ObjectId, //thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],  O ES ASI?
//         ref: 'User',

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.*/
// //COMO VERGA SE HACE ESTO  es una db de mongoose? o a que se refiere
// importando directamente las clases Schema y model del paquete mongoose
const { Schema, model, mongoose } = require('mongoose');
const thoughtSchema = require('./thought');  // Referencia al esquema de pensamiento

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
  thoughts: [thoughtSchema], // Referencia al esquema de pensamiento
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // Referencia al modelo de usuario
  }],
}, 
{
  id: false
}
);
// Virtual for friendCount
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Configuración adicional del esquema
userSchema.set('toJSON', { getters: true });
userSchema.set('id', false);

const User = mongoose.model('User', userSchema);

module.exports = { User };