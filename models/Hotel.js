import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  adminId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,  //distance from city centre
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    // required: true,
  },
  desc: {
    type: String,
    // required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  totalNumberOfRooms:{
     type:Number,
     required:true,
     default:0,
  },
  availiableRoom:{
      type:Number,
      required:true,
      default:0,
  },
  cheapestPrice: {
    type: Number,
    // required: true,
  }
});

export default mongoose.model("Hotel", HotelSchema)