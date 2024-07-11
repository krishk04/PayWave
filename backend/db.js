const { type } = require("express/lib/response");
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Krish:KRISH2004@cluster1.csih4wg.mongodb.net/");
const UserSchema= mongoose.Schema({
    firstName:String,
    lastName:String,
    username:String,
    password:String
});
const User=mongoose.model('User',UserSchema);
const accountSchema=mongoose.Schema({
    balance:{type:Number,
        required:true
    },
    userId:{type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
const Account=mongoose.model('Account',accountSchema);
module.exports={
    User,
    Account
}