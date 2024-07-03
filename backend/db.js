const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Krish:KRISH2004@cluster1.csih4wg.mongodb.net/");
const UserSchema= mongoose.Schema({
    firstName:String,
    lastName:String,
    username:String,
    password:String
});
const User=mongoose.model('User',UserSchema);
module.exports={
    User
}