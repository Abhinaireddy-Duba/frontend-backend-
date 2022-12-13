const mongoose=require("mongoose")

const newUserSchema={
	username:String,
	password:String,
	age:Number
}
const Register=mongoose.model("children",newUserSchema)

module.exports=Register