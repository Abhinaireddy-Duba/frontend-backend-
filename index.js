const express=require("express")
const app=express()
const port=4000;
const cors=require("cors")
const mongoose=require("mongoose")

const bodyParser=require("body-parser")
const Register=require("./Registerschema.js")
console.log(Register)


app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://Abhinaireddy-Duba:Abhinai@cluster0.pobpvvm.mongodb.net/seconddb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("created mongodb database")
	})
	.catch((err)=>{
		console.log(err)
	})
	
	
app.get("/",(req,res)=>{
	res.send("hii iam server")

})
app.post("/newData",(req,res)=>{
	const {username,password,age}=req.body
	const newUser=new Register({
		username:username,
		password:password,
		age:age

		
	})
	newUser.save()
	
})
	

app.listen(port,()=>console.log("server is started"))
