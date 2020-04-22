const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.use(require("body-parser").json({}));
app.use(express.static(path.join(__dirname, "public")));

let port = 3000;

app.listen(port, () => {
  console.log("server started");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/saveAsJson", (req, res) => {
  let signUp = require('./saveAsJson.js');
  signUp.collect(req, res);
  res.sendStatus(200);
});

app.get('/saved.json', (req, res) => {
  rawData = fs.readFileSync(path.join(__dirname, "../saved.json"));
  data = JSON.parse(rawData);
  res.send(data);
  res.sendStatus(200);
});