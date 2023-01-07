const mongoose = require('mongoose');
const date = require('date-and-time');


const now = new Date();




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
        type:String,
        default: date.format(now, 'YYYY/MM/DD')

    },
    startTime:{
        type:String,
        required:[true,"use the 24hr HHMM format"],
        default: "----"
    },
    endTime:{
        type:String,
        required:[true,"use the 24hr HHMM format"],
        default: "----"
    },
    eventDurationInHours:{
        type: Number,
        required:[true],
        default:0
    }

},{timestamps:true});


module.exports = mongoose.model('Event',EventSchema);
