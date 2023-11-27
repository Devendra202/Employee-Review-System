const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://shekhawatdev96:abc1234@cluster0.c8hv0po.mongodb.net/");


const db= mongoose.connection;
db.on("error", console.error.bind(console,"Error in connection to Mongodb"));


db.once("open", function(){
    console.log("Successfully connected to Database :: MongoDB");

    
});

module.exports =db;

