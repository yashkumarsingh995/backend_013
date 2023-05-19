const Net = require("../models/netModel");
const Venue = require("../models/venueModel");

const getNets = async (req, res, next) => {
    try {
        const allNets = await Net.find().populate('venue_id');
        console.log(allNets); // Print the value of `nets` array
console.log(allNets[0].venue_id); // Print the value of `venue_id` field of the first object in `nets` array

        res.status(200).json({
          success: true,
          data: allNets.map((net) => ({
            net_id: net._id,
            venue_id: net.venue_id,
            net_number: net.net_number,
            is_available: net.is_available,
            created_at: net.created_at,
            updated_at: net.updated_at,
          })),
        });
      } catch (error) {
        next(error);
      }
    
      
}

const getSingleNets = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const net = await Net.findById(_id).populate('venue_id').exec();
        if (!net) {
          const error = new Error(`Net with ID ${_id} not found`);
          error.status = 404;
          throw error;
        }
        res.send(net);
      } catch (error) {
        next(error);
      }
      
}


const updateNets = async (req, res, next) => {
    try {
        const net = await Net.findById(req.params.id);
        if (!net) {
          return res.status(404).json({ message: 'Net not found' });
        }
        const venue = await Venue.findById(net.venue_id);
        if (!venue) {
          return res.status(404).json({ message: `Venue with Id ${net.venue_id} not found` });
        }
    
        // Only update the provided fields
        if (req.body.net_number ) {
          net.net_number = req.body.net_number;
        }

        if (req.body.is_available != net.is_available) {
            net.is_available = req.body.is_available;
          }

    
        const updatedNet = await net.save();
        res.json(updatedNet);
      } catch (err) {
        next(err)
      }
};


const createNets = async (req, res, next) => {

    try {
        const venue = await Venue.findById(req.params.venueId);
        if (!venue) {
            return res.status(404).json({ message: 'Venue not found' });
        }

        const newNet = new Net({
            net_number:req.body.net_number,
            venue_id: req.params.venueId// set the Net's venue to the provided venue ID
        });

        const savedNet = await newNet.save();
        // venue.nets.push(savedNet._id); // add the new Net to the Venue's list of Nets
        // await venue.save();

        res.json(savedNet);
    } catch (err) {
       next(err)
    }

}




const deleteNets = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const nets = await Net.findById(_id).orFail();
    await Net.findByIdAndDelete(_id).orFail();
    res.send({ message: 'Net deleted successfully' });
  } catch(error) {
    next(error);
  }
}




const getNets_Venue = async (req,res,next) =>{

 try {
    const venueId = req.params.venueId;
    const nets = await Net.find({ venue_id: venueId })
    res.status(200).json(nets);
  } catch (error) {
    next(error)
  }

}

module.exports = { getNets, getSingleNets, updateNets, createNets, deleteNets ,getNets_Venue}