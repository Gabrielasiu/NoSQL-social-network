const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;

//CAMBIAR EL NOMBRE A LA DB