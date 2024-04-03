const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        enum : {
            values : ['speaker','listner','admin'],
            default : 'listner'
        }
    }
},{
    timestamps : true
});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password,12);
    next();
})

userSchema.methods.validPassword = async function(candidatePassword,userPassword){
    try{
        return await bcrypt.compare(candidatePassword,userPassword);
    }
    catch(error){
        throw error
    }
}

module.exports = mongoose.model('User',userSchema);