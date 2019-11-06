"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = generateJWT;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;
exports.getUsername = getUsername;
exports.getUserId = getUserId;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = require("../../config/config").logger;

function generateJWT(user) {
  var tokenData = { username: user.username, id: user.id };
  return _jsonwebtoken2.default.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}

function requireLogin(req, res, next) {
  var token = decodeToken(req);
  if (!token) {
    return res.status(401).json({ message: "You must be logged in." });
  }
  next();
}

function decodeToken(req, res) {
  var token = req.headers['authorization'].replace(/^JWT\s/, '');
  logger.trace(token);

  if (!token) {
    return "Fuck this shit";
  }

  _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      logger.error(err);
      return res.json({ success: false, message: 'Failed to authenticate token.' });
    } else {
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
    }
  });
}

function getUsername(req) {
  var token = req.headers['authorization'].replace(/^JWT\s/, '');

  if (!token) {
    return null;
  }
  return token.user.username;
}

function getUserId(req) {
  var token = req.headers['authorization'].replace(/^JWT\s/, '');

  if (!token) {
    return null;
  }
  console.warn(token);
  return token;
}