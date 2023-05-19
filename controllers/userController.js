const User = require("../models/userModel");

const getUser = async (req,res,next)=>{
    try
    {
        const users = await User.find({}).sort({name:"asc"}).orFail()
        res.json(users)
    }
    catch(error)
    {
        next(error)
    }
}



const getSingleUser = async (req, res,next) => {
    try {
      const _id = req.params.id;
      const user = await User.findById(_id).orFail();
      res.send(user);
    } catch (error) {
      next(error);
    }
  };
  
  

  const updateUser = async (req, res,next) => {
    try {
      const _id = req.params.id;
      const user = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
        runValidators: true,
      }).orFail();
      console.log(user)
      res.send(user);
    } catch (error) {
      next(error);
    }
  };


  const createUser = async (req,res,next)=>{
    try{
        const user = new User(req.body)
        user.save().then(()=>res.status(201).send(user));
    }
    catch(error)
    {
        next(error);
    }
  }
  



  const deleteUser = async (req,res,next)=>{
    try {
        const _id = req.params.id;
        const user = await User.findById(_id).orFail();
        await User.findByIdAndDelete(_id).orFail();
        res.send(user)
    }
    catch(error){
        next(error)
    }
  }
module.exports= {getUser,getSingleUser,updateUser,createUser,deleteUser}