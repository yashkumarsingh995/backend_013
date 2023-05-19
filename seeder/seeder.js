const connectDB = require("../config/db");

connectDB();

// Importing the Models
const venueData   = require("./venues");
const userData    = require("./users");
const netsData    = require("./nets");
const slotsData   = require("./slots");
const paymetsData = require("./payments");
const adminData   = require("./Admin");


// Making the object for the Models which are used as the seeder 
const Venue   = require("../models/venueModel");
const Users   = require("../models/userModel");
const Nets    = require("../models/netModel");
const Slots   = require("../models/slotModel");
const Payments = require("../models/paymentModel");
const Admin   = require("../models/adminModel");


// Writing the function for the importing the seeding data into the database


// @for the Venues
const importVenueData = async (req,res,next) =>{
    try { 
        await Venue.collection.deleteMany({});
        await Venue.collection.insertMany(venueData);
        console.log("Seeder Data for the  Venue proceeded successfullly ");
        return

    } catch (error){
        console.log("Error while processing the seeder data for the Venues ",error);
    }
    next();
}

// @for the Users
const importUserData = async (req,res,next)  =>{
    try { 
        await Users.collection.deleteMany({});
        await Users.collection.insertMany(userData);
        console.log("Seeder Data for the  Users proceeded successfullly ");
        return

    } catch (error){
        console.log("Error while processing the seeder data for the Users ",error);
    }
}

// @for the Nets 
const importNetsData = async (req,res,next) =>{
    try { 
        await Nets.collection.deleteMany({});
        await Nets.collection.insertMany(netsData);
        console.log("Seeder Data for the  Nets proceeded successfullly ");
        return

    } catch (error){
        console.log("Error while processing the seeder data for the Nets ",error);
    }
}


// @for the Slots
const importSlotsData = async (req,res,next) =>{
    try { 
        await Slots.collection.deleteMany({});
        await Slots.collection.insertMany(slotsData);
        console.log("Seeder Data for the  Slots proceeded successfullly ");
        return

    } catch (error){
        console.log("Error while processing the seeder data for the Slots ",error);
    }
}


// @for the Payments
const importPaymentsData = async (req,res,next) =>{
    try { 
        await Payments.collection.deleteMany({});
        await Payments.collection.insertMany(paymetsData);
        console.log("Seeder Data for the  Payments proceeded successfullly ");
        return

    } catch (error){
        console.log("Error while processing the seeder data for the Payments ",error);
    }
}

// @for the Admin 
const importAdminData = async (req,res,next) =>{
    try { 
        await Admin.collection.deleteMany({});
        await Admin.collection.insertMany(adminData);
        console.log("Seeder Data for the  Admin proceeded successfullly ");
        return

    } catch (error){
        console.log("Error while processing the seeder data for the Admin ",error);
    }
}


// calling the functions
const callSeederactivator = async()=>{
    await importVenueData();
    await importUserData();
    await importNetsData();
    await importSlotsData();
    await importPaymentsData();
    await importAdminData();
    process.exit()
}

callSeederactivator();