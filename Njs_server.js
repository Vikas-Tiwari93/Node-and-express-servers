let http = require("http");
let fs = require("fs");
let myfile = fs.readFileSync("./index.html");
let myhome = fs.readFileSync("./home.html");
let myabout = fs.readFileSync("./about.html");
const server = http.createServer((req, res) => {
  let request = req.url;
  console.log(request);
  res.writeHead(200, { "Content-type": "text/html" });
  if (request === "/") {
    res.end(myfile);
  } else if (request === "/about.html") {
    res.end(myabout);
  } else if (request === "/home.html") {
    res.end(myhome);
  } else {
    res.statusCode = 404;
    res.end("file not found");
  }
});
server.listen(3030, "localhost", () => {
  console.log("server has started");
});
