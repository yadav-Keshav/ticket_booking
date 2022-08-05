import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    paymentStatus: {
        sucess: [true, false],
        required: true,
    },
    bookingStatus: {
        sucess: [true, false],
        required: true,
    }
});

export default mongoose.model("Booking", bookingSchema)