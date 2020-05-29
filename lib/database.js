'use strict';
const mongoose=require('mongoose');
function connect(){
    mongoose.connect(/*"mongodb://localhost:27017/Phone"*/"mongodb+srv://Rentomojo:rentomojo@phonebook-sri6z.mongodb.net/test?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
    });
    const connection=mongoose.connection;
    connection.on('error',function(err){
        console.log("server is down");
    });
    connection.on('open',function(){
        console.log("successfully connected");
    })
}
module.exports={
    connect: connect,
}