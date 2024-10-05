const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode=201;
    res.setHeader("MERN-Bacth","NO 7");
    
    if (req.url === "/") {
        res.end("home page");
    } else if (req.url === "/contact") {
        res.end("contact page");
    } else if (req.url === "/profile") {
        res.end("profile page");
    } else {
        res.end("hello node js server");
    }
});

server.listen(6060, function() {
    console.log('server started on port 6060');
});
