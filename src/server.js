const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to Food Server APP </h1>");
});

const PORT = 7000;

app.listen(PORT, () => {
  console.log("Server Running");
});
