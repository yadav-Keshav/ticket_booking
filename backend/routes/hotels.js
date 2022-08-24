import express from "express";
import {
  countByCity,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelByAdminId,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { uploadfile } from "../utils/s3.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin,uploadfile, createHotel);
router.get("/",verifyAdmin,getHotelByAdminId);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getHotels);



export default router;
