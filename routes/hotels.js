const express =require("express");
const {
  countByCity,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelByAdminId,
  getHotels,
  updateHotel,
} =require("../controllers/hotel.js");
const {verifyAdmin} =require("../utils/verifyToken.js");
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
router.get("/",verifyAdmin,getHotelByAdminId);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);



module.exports= router;
