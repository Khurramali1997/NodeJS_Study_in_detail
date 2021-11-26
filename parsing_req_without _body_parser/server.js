const http = require("http");
const fs = require("fs");
const routes = require("./routes");
port = 8080;

const server = http.createServer(routes);

server.listen(port, () => {
  console.log(`Server Listning to the port ${port}`);
});
