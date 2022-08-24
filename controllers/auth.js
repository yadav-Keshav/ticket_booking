const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const { createError } = require("../utils/error.js");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return next(customErrorHandler.alreadyExist());
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hash, });
    await newUser.save();

    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};


exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return next(customErrorHandler.wrongCredentials());
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect)
      return next(customErrorHandler.wrongCredentials());

    const token = jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: '30d' });

    const { password, isAdmin, ...otherDetails } = user._doc;

    res.cookie("access_token", token, { httpOnly: true }).status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};
