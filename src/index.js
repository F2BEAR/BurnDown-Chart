const path = require("path");
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
