const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config();
const port = 3000 || process.env.PORT;
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/tecknofest";


mongoose.connect(dbUrl).then(()=>{
    console.log("connected to db");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
