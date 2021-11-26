const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<h1>Hello World</h1>");
    res.write(
      '<form action="/message" method="post"><input type="text" name="text" id="text" value="" /><button type="submit">Submit</button></form>'
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    //console.log(req);
    const array = [];
    req.on("data", (data) => {
      array.push(data);
    });
    req.on("end", () => {
      const parsedbody = Buffer.concat(array).toString();
      console.log(parsedbody);
      fs.writeFileSync("test.txt", parsedbody);
    });
  }
};

module.exports = requestHandler;
