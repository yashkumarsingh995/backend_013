const express = require('express');
const {getNets,getSingleNets,updateNets,createNets,deleteNets,getNets_Venue} =require("../controllers/netController")

const router = express.Router();


// @0 getting all nets
router.get("/",getNets);


// @1 getting the single nets detail by id
router.get("/:id",getSingleNets);


// @2 Updating the nets detaild by id:
router.patch("/:id",updateNets);

// @3 Creating the nets
router.post("/venue/:venueId",createNets);


// @4 Deleting the nets
router.delete("/:id",deleteNets);


// @5 Getting all the nets of a particular venue
router.get("/venue/:venueId",getNets_Venue)


module.exports = router