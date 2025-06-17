import express from "express";
const server=express();
const port=3000;

server.get("/",(req,res)=>{
    res.send("<h1>Homepage</h1>");
});

server.get("/about",(req,res)=>{
    res.send("<h1>I am a programmer</h1>");
})

server.get("/contact",(req,res)=>{
    res.send("<h1>777-6969-69669</h1><p>That is my phone number brother</p>");
})


server.listen(port,()=>{
    console.log("Server running on port "+port);
})