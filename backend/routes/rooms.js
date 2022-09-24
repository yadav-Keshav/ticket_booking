const express = require("express");
const {
  createRoom,
  deleteRoom,
  getRoom,
  updateRoom,
  getRooms,
  updateRoomAvailability,
} = require("../controllers/room.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();
//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/:hotelid", getRooms);

module.exports = router;
