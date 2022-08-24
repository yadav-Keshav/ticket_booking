const mongoose=require("mongoose");
const HotelSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  hoteName: {
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
  hotelDesc: {
    type: String,
    // required: true,
  },
  hotelType:{
    type:String,
    enum:['BoysHostel','GirlHostel','Flat'],
    required:true
  },
  img: [{
    src: String,
    key: String,
  }],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default:0
  },
  reviews: [{
    userName: String,
    rating: Number,
    comment: String,
  }],
  cheapestPrice: {
    type: Number,
    // required: true,
  }
});

module.exports= mongoose.model("Hotel", HotelSchema);