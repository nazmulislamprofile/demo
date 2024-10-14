const http=require('http');

const server=http.createServer((req,res)=>{
    res.end("Home page");
})

server.listen(5858,()=>{
    console.log("server started");
})