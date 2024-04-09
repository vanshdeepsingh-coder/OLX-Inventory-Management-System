const express=require('express');
const updateInventory=require('./updateInventory');
const fs=require('fs');
const server=express();
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

function readJSONFileSync(filepath){
    var file=fs.readFileSync(filepath);
    return JSON.parse(file)
}

server.get('/',(req,res)=>{
    res.send(readJSONFileSync('data.json'));
})

updateInventory('data.json');

module.exports=server;