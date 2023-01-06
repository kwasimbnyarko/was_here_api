const mongoose = require('mongoose');


const EventQRSchema = new mongoose.Schema({
    eventId:{
        type:String,
        required: true,
    },
    codeDetails:{
        type:String,
        required:true,
    }
})



module.exports = mongoose.model("EventQR",EventQRSchema);