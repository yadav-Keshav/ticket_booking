import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel'
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: {
      type: Number
    },
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
