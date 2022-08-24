const express=require('express');
const authRoute =require("./routes/auth.js");
const cookieParser =require("cookie-parser");
const cors=require('cors');
const usersRoute =require("./routes/users.js");
const hotelsRoute =require("./routes/hotels.js");
const roomsRoute =require("./routes/rooms.js");
const connectDB =require("./config/connectDB.js");
const errorHandler = require('./middleware/errorHandler.js');

const app = express();

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.get("/", (req, res) => {
    return res.status(200).json({ message: "Sever is working" })
})


app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);
app.use(errorHandler);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    // connect();
    connectDB();
    console.log(`Server is Listening on Port : ${PORT}`);
})