const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end(`<h1>Home Pagge</h1>
    `);
  } else {
    res.end(`
    <h1>404 Not Found</h1>
    <a href="/">Go Home</a>
    `);
  }
});

server.listen(1000);
