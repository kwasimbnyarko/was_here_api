const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },
    organiser:{
        type:String,
        required:true,
        trim:true,
        maxlength:50
    },
    date:{
        type:Date,
        default: Date.now()
    },
    startTime:{
        type:String,
        required:[true,"use the 24hr HHMM format"],
        default: "----"
    },
    eventDuration:{
        type: Number
    }

},{timestamps:true});


const EventQRSchema = new mongoose.Schema({

})


module.exports = mongoose.model('Event',EventSchema);