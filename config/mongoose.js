// require library
const mongoose = require('mongoose');

// connection to the DB
mongoose.connect('mongodb://127.0.0.1:27017/contactList_db')

// check connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('successfully connected to database');
});

module.exports = db;