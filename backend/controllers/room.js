const Room = require("../models/Room.js");
const Hotel = require("../models/Hotel.js");
const customErrorHandler = require("../utils/customErrorHandler.js");

exports.createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  req.body.hotelId = hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
exports.updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};
exports.deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
exports.getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

exports.getRooms = async (req, res, next) => {
  try {
    const hotelId = req.params.hotelId;
    const getAllRooms = await RoomSchema.find({ hotelId: hotelId });
    res.status(200).json(getAllRooms);
  } catch (err) {
    next(err);
  }
}
