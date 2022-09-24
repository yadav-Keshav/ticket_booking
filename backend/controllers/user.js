const User = require("../models/User.js");
const bcrypt = require('bcrypt');
const customErrorHandler = require('../utils/customErrorHandler');
exports.updateUserPassword = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await User.findByIdAndUpdate(req.params.id, { password: hash }, { new: true });
    res.status(200).json({ msg: "Password has been chenged" });
  } catch (err) {
    next(customErrorHandler.wrongCredentials());
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(customErrorHandler.wrongCredentials());
  }
}
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(customErrorHandler.wrongCredentials());
  }
}
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(customErrorHandler.wrongCredentials());
  }
}
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(customErrorHandler.wrongCredentials());
  }
}
