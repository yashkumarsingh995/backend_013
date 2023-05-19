const express = require('express');
const {getVenue,getSingleVenue,updateVenue,createVenue,deleteVenue} =require("../controllers/venueController")

const router = express.Router();

// @0 getting all venues
router.get("/",getVenue);


// @1 getting the single venue detail by id
router.get("/:id",getSingleVenue);


// @2 Updating the venues detaild by id:
router.patch("/:id",updateVenue);

// @3 Creating the venues
router.post("/",createVenue);


// @4 Deleting the venues
router.delete("/:id",deleteVenue);

module.exports = router