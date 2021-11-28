import express from "express";
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();

import userRout from "./routes/user.mjs";
import entryRout from "./routes/entry.mjs";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(entryRout);
app.use(userRout);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
