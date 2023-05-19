const express = require('express');
const getPayment =require("../controllers/paymentController")

const router = express.Router();


router.get("/",getPayment);


module.exports = router