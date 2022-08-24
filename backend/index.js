import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
const MONGO=process.env.MONGO;
const connect = async () => {
    mongoose.connect(MONGO)
        .then((db) => { console.log(`sucefully Connected to : ${db.connection.host}`) })
        .catch((err) => { console.log(err.message) })
};



//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.get("/",(req,res)=>{
    return res.status(200).json({message:"Sever is working"})
})
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    connect();
    console.log(`Server is Listening on Port : ${PORT}`);
})