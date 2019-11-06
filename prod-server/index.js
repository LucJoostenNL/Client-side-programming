"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _routes = require("./routes");

var _env = require("./config/env.js");

var _db = require("./config/db.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var app = (0, _express2.default)();
var port = 30;
var logger = require("../config/config.js").logger;

(0, _env.setEnvironment)(app);
(0, _db.connectToDB)();
(0, _routes.Routes)(app);

app.get("/", function (req, res) {
  if (process.env.NODE_ENV !== "production") {
    return res.status(200).json({ status: "success", message: "back-end API of the Task Manager", mode: "Development" });
  } else {
    return res.sendfile("index.html", { root: __dirname + "/../dist/" });
  }
});

app.listen(port, function () {
  return logger.trace("Task Manager listening on port " + port + " in " + process.env.NODE_ENV + " mode!");
});

module.exports = app;