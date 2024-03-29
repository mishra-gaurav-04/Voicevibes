const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    userName : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        enum : {
            values : ['speaker','listner','admin'],
            default : 'listner'
        }
    }
},{
    timestamps : true
});

module.exports = mongoose.model('User',userSchema);