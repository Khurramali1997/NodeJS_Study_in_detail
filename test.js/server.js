const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello User</h1>");
    res.write(
      '<form action="/create-user" method=post><input type="text" name="data"/><button>Submit</button></form>'
    );
  }
  if (url === "/users") {
    res.setHeader;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Users List</h1>");
  }
  if (url === "/create-user") {
    const data = [];
    req.on("data", (chunks) => {
      data.push(chunks);
    });
    req.on("end", () => {
      const parseData = Buffer.concat(data).toString();
      console.log(parseData);
    });
  }
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
