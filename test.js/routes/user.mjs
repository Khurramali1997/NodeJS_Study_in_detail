import express from "express";
import path from "path";
const router = express.Router();
const __dirname = path.resolve();

router.use("/", (req, res, next) => {
  console.log(path.join(__dirname, "../", "test.js", "views", "entry.html"));
  res.sendFile(path.join(__dirname, "../", "test.js", "views", "entry.html"));
});

export default router;
