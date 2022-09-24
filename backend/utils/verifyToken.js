const jwt = require("jsonwebtoken");
const customErrorHandler = require("./customErrorHandler.js");
const { JWT_SECRET } = require('../config/env');

exports.verifyToken = (req, res, next) => {
  var token = null;
  if (req.headers.authorization && req.headers.authorization.token) {
    token = req.headers.authorization.token
  }
  if (!token) {
    return next(customErrorHandler.unAuthorizedUser());
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return next(customErrorHandler.unAuthorizedUser());
    }
    req.user = user;
    next();
  });
}

exports.verifyUser = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(customErrorHandler.unAuthorizedUser());
    }
  });
}

exports.verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(customErrorHandler.unAuthorizedUser());
    }
  });
};

