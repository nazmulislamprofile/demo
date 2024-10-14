const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>home page</h2>");
        res.end()
    }
    else if(req.url==="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>about page</h2>");
        res.end()
    }
    else if(req.url==="/contact"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h2>contact page</h2>");
        res.end()
    }
})

server.listen(5858,()=>{
    console.log("server started");
})