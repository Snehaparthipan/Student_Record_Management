const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,"enter minimum 3 letters"],
        require:true
    },
    grade:{
        type:String,
        minlength:[2],
        unique:true,
        require:true
    },
    subject:{
        type:String,
        minlength:[2,"enter min 5 letter"],
        require:true
    }},
    {timestamps:true}
)
module.exports=mongoose.model('User',userSchema)