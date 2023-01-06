const qrcode = require('qrcode');
const path = require('path');
const { v4:uuidv4 } = require('uuid');


const Event  = require('../models/event');
const EventQR = require('../models/event_qr');
const User = require('../models/user');
const Attendance = require('../models/event_attendance');



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
    const eventCode = uuidv4();
    try{
        await qrcode.toFile(`./qrcodes/events/last_qr_code.png`,eventCode);
        const doesEventExist = await Event.exists(req.body);
        const doesCodeExist = await EventQR.exists({eventId:req.body._id});
        if(!doesEventExist){
            return res.status(500).json({success:false,error:`No event with id ${req.body._id}`});
        }else{
            const event = await Event.findById(req.body);
            console.log(event);
            //todo check event validity (i.e. start and stop times if any)
        }
        if(doesCodeExist){
            return  res.status(500).json({success:false,error:'Event already has qrcode'});
        }

        const event_qr_codes_document = await EventQR.create({
            eventId:req.body._id,
            codeDetails:eventCode,
        })
        return res.status(200).sendFile(path.join(__dirname,"..","qrcodes","events",'last_qr_code.png'));
    }catch (e) {
        console.log(e);
        return res.status(500).json({success:false,error:e.messageerror});
    }
}

const markEventAttendance = async (req,res) =>{
    const code = req.body.code;
    const userId = req.body.details.userId;
    try{
        const doesEventQRExist = await EventQR.exists({codeDetails:code});
        const doesUserExist = await User.exists({_id:userId});

        if(!doesEventQRExist){
            return res.status(500).json({success:false,error:`This code is not active or does not exist`});
        }
        if(!doesUserExist){
            return res.status(500).json({success:false,error:`This user is not registered. Confirm user details`});
        }
        const eventQR = await EventQR.findOne({codeDetails:code})
        //todo check if event is active
        const attendanceRecordExist = await Attendance.exists({eventId:eventQR.eventId});
        if(attendanceRecordExist){
            const attendance =  await Attendance.findOne({eventId:eventQR.eventId});
            attendance.attendees.push(userId);
            attendance.save();

            return res.status(200).json({success:true,attendance:attendance});
        }else{
            const attendance =  await Attendance.create({eventId:eventQR.eventId});
            attendance.attendees.push(userId);
            return res.status(200).json({success:true,attendance:attendance});
        }




    }catch (e) {
        console.log(e);
        return res.status(500).json({success:false,error:e.messageerror});
    }
}


module.exports = {
    getAllEvents,
    createEvent,
    generateEventQR,
    markEventAttendance
}