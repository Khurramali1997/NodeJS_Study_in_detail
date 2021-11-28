import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // body parser middleware will be executed for all paths

app.use("/log", (req, res, next) => {
  res.send(
    '<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Simple Form</title> </head> <body> <form action="/product" method="post"> <input type="text" name="text" id="text" /><button type="submit"> Submit </button> </form> </body></html>'
  );
});

//app.use("/product", (req, res, next) => {
//  console.log("Will Pick both get and post request");
//  console.log(req.body);
//});

app.get("/product", (req, res, next) => {
  console.log("Will pick only get request");
  console.log(req.body.id);
});

app.post("/product", (req, res, next) => {
  console.log("Will pick only post request");
  console.log(req.body);
  next();
});

app.use("/", (req, res, next) => {
  console.log("redirected to '/log'");
  res.redirect("/log");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
