const Admin = require("../models/adminModel");

const getAdmin = (req,res)=>
{
    res.send("this is the Admin controller")
}

module.exports= getAdmin;