import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";


export const verifyUser = async (req, res, next) => {
  let token;
  console.log("verify user");
  if (req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      return next(createError(401, "Not authorized, token failed"));
    }
  }
  if (!token) {
    return next(createError(401, "Not authorized, no token"));
  }
}

export const verifyAdmin = (req, res, next) => {
  console.log("verifyAdmin");
  verifyUser(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  })
};

