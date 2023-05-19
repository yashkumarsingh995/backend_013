const express = require('express');
const {getSlot,getSingleSlots,createSlot,updateSlot,deleteSlot , slotSpecficNet,slotSpecficUser} =require("../controllers/slotController")

const router = express.Router();

// @0 1et all slot
router.get("/",getSlot);

// @1 Get a single slot by id
router.get("/:id",getSingleSlots);

// @2 Creating a new slot
router.post("/net/:net_id",createSlot);

// @3 Deleting a slot
router.delete("/:id",deleteSlot);

// @4 Updatating the slot
router.patch("/:slot_id",updateSlot);

// @5 Getting all the slots for the specific net
router.get("/net/:net_id",slotSpecficNet);

// @6 Gettting all the slots booked by the user
router.get("/user/:user_id",slotSpecficUser);

// @7 Booking the slot for the user
// To be done



module.exports = router