const express = require('express');

const app = express();

// @Importinng the routes for the different api/*
const userRoutes = require("./userRoutes");
const venueRoutes = require("./venueRoutes");
const slotRoutes = require("./slotRoutes");
const paymentRoutes = require("./paymentRoutes");
const netRoutes = require("./netRoutes");
const adminRoutes = require("./adminRoutes");
const bookingRoutes = require("./bookingRoutes");

// calls for the api :url/api/<options>/<operations>
app.use("/user",userRoutes);
app.use("/venue",venueRoutes)
app.use("/slot",slotRoutes)
app.use("/payment",paymentRoutes)
app.use("/net",netRoutes)
app.use("/admin",adminRoutes)
app.use("/bookings",bookingRoutes)


module.exports = app
