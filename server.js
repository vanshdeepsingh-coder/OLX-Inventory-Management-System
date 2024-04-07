const express=require('express');
const server=express();
const path=require('path');
const fs=require('fs');
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

server.get('/',(req,res)=>{
    const homePage=fs.readFileSync('home.html');
    res.end(homePage.toString());
})

server.get('/about',(req,res)=>{
    const aboutPage=fs.readFileSync('about.html');
    res.end(aboutPage.toString())
})