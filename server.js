const express = require ("express");
const server = express();


server.use(express.static(__dirname))

server.get("/",(req,res) =>{
    res.render("/index.html")
})

server.listen(5000);