const Hotel = require("../models/Hotel.js");
const Room = require("../models/Room.js");

exports.createHotel = async (req, res, next) => {
  req.body.userId = req.user._id;
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

exports.updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};
exports.deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
exports.getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

exports.getHotelByAdminId = async(req,res,next) => {
  const adminId = req.params.adminId;
  try {
    const hotels = await Hotel.find({ userId: adminId });
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
}

exports.getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const getAllHotels = await HotelSchema.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 9999 },
    }).limit(req.query.limit);

    res.status(200).json(getAllHotels);
  } catch (err) {
    next(err);
  }
},


  exports.countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };



