const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:100
    },
    index_number:{
        type:String,
        required:[true,'must provide index number'],
        trim:true,
        maxlength:7
    },
    reference_number:{
        type:String,
        required:[true,'must provide reference number'],
        trim:true,
        maxlength:8
    }
});


module.exports = mongoose.model('User',UserSchema);