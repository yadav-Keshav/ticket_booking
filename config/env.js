const dotenv = require('dotenv');
dotenv.config();
exports.DB_URL=process.env.DB_URL;
exports.SALT_ROUND=process.env.SALT_ROUND;
exports.JWT_SECRET=process.env.JWT_SECRET;