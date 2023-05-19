const Slot = require("../models/slotModel");
const Net = require("../models/netModel");
const Venue = require("../models/venueModel")
const User = require("../models/userModel");

const getSlot = async (req,res,next)=>{
    try {
        const slots = await Slot.find().populate('net_id')
        res.status(200).json({
            success: true,
            data: slots.map((slot) => ({
              slot_id: slot._id,
              net_id:slot.net_id,
              Slot_time:slot.Slot_time,
              rate:slot.rate,
              booked_by_user_id:slot.booked_by_user_id,
              booking_type:slot.booking_type,
              created_at:slot.created_at,
              updated_at:slot.updated_at
            })),
          });
      } catch (error) {
        next(error);
      }

}

const getSingleSlots = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const slot = await Slot.findById(_id).orFail();
        res.send(slot);
    } catch (error) {
        next(error);
    }
}


const createSlot = async (req,res,next) =>{
    try {
        // Get the input data from request body
        const net_id = req.params.net_id;
        console.log(net_id);
        const { Slot_time, rate } = req.body;
    
        // Find the net and venue associated with the net
        const net = await Net.findById(net_id);
        const venue = await Venue.findById(net.venue_id);
    

        // Create the new slot with the input data
        const slot = new Slot({
          Slot_time,
          net_id,
          rate
        });
    
        // Save the new slot to the database
        const savedSlot = await slot.save();
    

    
        // Return the saved slot object as response
        res.status(201).json(savedSlot);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: `${err}` });
      }
    
    
}




const updateSlot = async(req,res,next)=>{
    try {
        const slotId = req.params.slot_id;
        const updatedSlot = req.body;
        
        // Update the slot document in the database
        const result = await Slot.findByIdAndUpdate(slotId, updatedSlot, { new: true }).orFail();
        
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        next(error);
      }
}


const deleteSlot = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const slot = await Slot.findById(_id).orFail();
    await Slot.findByIdAndDelete(_id).orFail();
    res.send(slot);
  } catch (error) {
    next(error);
  }
};


const slotSpecficNet = async (req,res,next)=>{
    try {
        const slots = await Slot.find({ net_id: req.params.net_id });
        res.send(slots)
      } catch (err) {
        next(err)
      }
    
}

const slotSpecficUser = async (req,res,next)=>{
    try {
        const _id = req.params.user_id;
        const user = await User.findById(_id).orFail()
        const slots = await Slot.find({booked_by_user_id: _id });
        res.send(slots)
      } catch (error) {
       next(error);
      }
    
    
}


module.exports= {getSlot,getSingleSlots,createSlot,updateSlot,deleteSlot , slotSpecficNet,slotSpecficUser}