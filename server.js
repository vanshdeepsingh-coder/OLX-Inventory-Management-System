const express = require('express');
const server = express();
const PORT=3000;

server.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server is running successfully on port number: ${PORT}`);
    }
    else{
        console.log(`An error occured while starting the server`);
        console.log(`Error Code: ${error}`);
    }
})

server.get('/',async(req,res)=>{
    res.send('/home.index');
})