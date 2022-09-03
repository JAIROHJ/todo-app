const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list_db');
const db = mongoose.connection;

//error

db.on('error',console.error.bind(console,'connecting error to db'));

db.once('open',()=>{
    console.log('success fully connected to the database');
});