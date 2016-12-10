var express=require("express");
var mongoose = require("mongoose");
var contact = require("./model/contact");
var app=express();

var router=express.Router();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));
mongoose.connect("mongodb://localhost/mydata",function(){
console.log("Successfully connected to database !!!");

});

router.get("/",function(req,res){
res.send({message:"Hello Hyderabad !!!!!!!!"})

});

/*app.get("/person",function(req,res){
var person={
firstName: "JohnGalt"
}

var contact={
	city : "Hyderabad"
}
res.json(
	{person,contact});

});*/

router.get("/contact",function(req,res){
contact.getContact(function(err,contact){
	if(err){
		throw err;
	}
console.log("-----"+contact);
res.json(contact);
})
});

router.post("/contact", function(req, res){
	var body=req.body;
	contact.addContact(body,function(err,cont){
		if(err){
			throw err;
		}
		console.log("-----------posted data------------"+body);
		res.json(cont);
	})
})

router.put("/contact/:id",function(req,res){

	var id = req.params.id;
	var body = req.body;
	contact.updateContact(id,body,function(err,cont){

		if(err){
			throw err;

		}
		res.json(cont);
	})
})

router.delete("/contact/:id",function(req,res){

	var id=req.params.id;
	contact.deleteContact(id,function(err,cont){
		if(err){
			throw err;
		}
		res.json(cont);

	})

})



app.use("/", router);

var PORT = process.env.PORT || 9999;

app.listen(PORT,function(){
	console.log("Server is listening at port" + PORT);
})