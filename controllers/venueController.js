const Venue = require("../models/venueModel");

const getVenue = async (req,res,next)=>{
   try{
    const venues = await Venue.find({}).orFail();
    res.send(venues);
   }catch(error)
   {
    next(error);
   } 
   
}

const getSingleVenue = async (req,res,next) =>{
    try {
        const _id = req.params.id;
        const venue = await Venue.findById(_id).orFail();
        res.send(venue);
      } catch (error) {
        next(error);
      }
}


const updateVenue = async (req, res,next) => {
    try {
      const _id = req.params.id;
      const venues = await Venue.findByIdAndUpdate(_id, req.body, {
        new: true,
        runValidators: true,
      }).orFail();
      res.send(venues);
    } catch (error) {
      next(error);
    }
  };


  const createVenue = async (req,res,next)=>{
    try{
        const venues = new Venue(req.body)
        venues.save().then(()=>res.status(201).send(venues));
    }
    catch(error)
    {
        res.send(error)
    }
  }
  



  const deleteVenue = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const venue = await Venue.findByIdAndDelete(_id);
      if (!venue) {
        return res.status(404).send("Venue not found");
      }
      res.send(venue);
    } catch (error) {
      next(error);
    }
  };
  

module.exports= {getVenue,getSingleVenue,updateVenue,createVenue,deleteVenue}