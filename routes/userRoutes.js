const express = require('express');
const {getUser,getSingleUser,updateUser,createUser,deleteUser} =require("../controllers/userController")

const router = express.Router();

// Getting the different calls 

// @0 Getting all the users
router.get("/",getUser)

// @1 Getting the single user by id:
router.get("/:id",getSingleUser);  // need to be updated

// @2 Updating the user detaild by id:
router.patch("/:id",updateUser);

// @3 Creating the user
router.post("/",createUser);


// @4 Deleting the user
router.delete("/:id",deleteUser);

// @5 Authenticating the user
// to be done



module.exports = router