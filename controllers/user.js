const User = require('../models/user');


const getAllUsers = async (req,res) =>{
    try{
        const users = await User.find({});
        return res.status(200).json({success:true,data:users})
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
        return res.status(500).json({success:false,msg:e.messageerror});
    }
};

const getUserWithMacAddress = async (req, res) =>{
    console.log(req.params.address);
    try{
        const user = await User.findOne({mac_address:req.params.address});
        return res.status(200).json({success:true,user:user});
    }catch (e){
        console.log(e);
        return res.status(500).json({success:false,msg:e.messageerror});
    }
}


module.exports = {
    getAllUsers,
    createUser,
    getUserWithMacAddress
};