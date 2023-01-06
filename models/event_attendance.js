const mongoose =  require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    eventId:{
        type:String,
        required:true
    },
    attendees:{
        type:[String]
    }
})


module.exports = mongoose.model("Attendance",AttendanceSchema)