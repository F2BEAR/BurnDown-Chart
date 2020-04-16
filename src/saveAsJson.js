"use strict";

const fs = require("fs");

class SignUp {
  collect(req, res) {
    try {
      console.log("SaveAsJSON");
      
      fs.appendFileSync("saved.json", JSON.stringify(req.body));
      res.statusCode = 200;
    } catch (err) {
      res.statusCode = 500;
      res.statusMessage = err;
    }
  }
}

var newRequest = new SignUp();

module.exports = newRequest;
