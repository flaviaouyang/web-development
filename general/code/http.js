const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.end(`<h1>Home Page</h1>
    <a href="/about">About</a>
    <a href="/hobby">Hobby</a>
    `);
  } else if (req.url === "/about") {
    res.end(`<h1>About me</h1>
    <a href="/">Go Home</a>
    <a href="/hobby">Hobby</a>
    `);
  } else if (req.url === "/hobby") {
    res.end(`<h1>My Hobbies are ...</h1>
    <a href="/">Go Home</a>
    <a href="/about">About</a>
    `);
  } else {
    res.end(`
    <h1>404 Not Found</h1>
    <a href="/">Go Home</a>
    `);
  }
});

server.listen(1000);
