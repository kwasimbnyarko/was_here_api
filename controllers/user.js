const User = require('../models/user');


const getAllUsers = async (req,res) =>{
    try{
        const tasks = await User.find({});
        return res.status(200).json({success:true,data:tasks})
    }catch (e) {
        console.log(e)
    }
};

const createUser = async (req,res) =>{
    try{
        const user = await User.create(req.body);
        return res.status(201).json(user);
    }catch (e) {
        console.log(e)
        return res.status(500).json({success:false,msg:e.messageerror})
    }
};


module.exports = {
    getAllUsers,
    createUser
};