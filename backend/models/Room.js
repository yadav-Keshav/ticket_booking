const mongoose =require("mongoose");
const RoomSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel'
    },
    roomNo: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Availiable', 'Booked'],
      default: 'Available'
    },
    noOfBeds: {
      type: String,
      default: 1
    },
    price: {
      type: Number,
      required: true,
    },
    img: [
      {
        src: String,
        key: String
      }
    ]

  },
  { timestamps: true }
);

module.exports=mongoose.model("Room", RoomSchema);
