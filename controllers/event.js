const Event = require('../models/event');
const qrcode = require('qrcode');
const path = require('path');




const getAllEvents = async (req,res) =>{
    try{
        const events = await Event.find({});
        return res.status(200).json({success:true,data:events});
    }catch (e) {
        console.log(e);
        return res.status(500).json({success:false,error:e.messageerror});
    }
};


const createEvent = async(req,res) =>{

    try{
        const event = await Event.create(req.body);
        return res.status(201).json({success:true,data:event});
    }catch(e){
        console.log(e)
        return res.status(500).json({success:false,error:e.messageerror});
    }
};

const generateEventQR = async (req,res) =>{
//todo replace with hashed id
    try{
        const qr = await qrcode.toFile(`./qrcodes/events/${req.body._id}.png`,req.body._id);

        return res.status(200).sendFile(path.join(__dirname,"..","qrcodes","events",`${req.body._id}.png`));
    }catch (e) {
        console.log(e);
        return res.status(500).json({success:false,error:e.messageerror});
    }
}


module.exports = {
    getAllEvents,
    createEvent,
    generateEventQR
}