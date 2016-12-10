var chai = require("chai"),
	expect = chai.expect,
	should = chai.should(),
	supertest = require("supertest");
	var value=null;


var server = supertest.agent("http://localhost:9999")

describe("Contact API Test Suite",function(){

	it("should return home page with some json",function(done){

		server.get("/")
		.expect(200)
		.expect("content-type",/json/)
		.end(function(err,res){
			//console.log(res);
			res.status.should.be.equal(200);
			res.info.should.be.false;
			res.charset.should.be.equal("utf-8");
			var obj=res.body;
			console.log("-----"+res.text);
			obj.should.have.property("message");
			JSON.parse(res.text).should.have.property("message").to.be.equal("Hello Hyderabad !!!!!!!!");
			done();
		})
	})

	it("should get the contact list",function(done){
		server.get("/contact")
		.expect(200)
		.expect("content-type",/json/)
		.end(function(err,res){
			console.log(res.body);
			Array.isArray(res.body).should.be.true;
			console.log("--length---"+res.body.length);
			//res.body.length.should.be.equal(2);
			res.body.length.should.be.a("number");
			res.body.forEach(function(item){
				item.should.have.property("_id");
				item.should.have.property("name");
				item.should.have.property("email");
				//item.should.have.property("name").with.length(7);
				item.should.have.property("email").to.contain("@");
				item.should.have.property("email").to.contain(".com");
			})
			should.equal(null,value);
			done();
		})

	})

	it.skip("should add contact to the database",function(done){

		var obj= {
			name: "purnima",
			email: "purnima@gmail.com"

		}

		server.post("/contact")
		.send(obj)
		.expect(200)
		.expect("content-type",/json/)
		.end(function(err,res){

			res.status.should.be.equal(200);
			console.log("---err---"+err);
			console.log(res.body);
			done();
		})

	})

	it("should edit the contact",function(done){

		var obj = {
			_id : "584bd9f4ece9482070c138d5",
			name : "kalpana",
			email : "kalpana@gmail.com",
		}

		server.put("/contact/" + obj._id)
		.send(obj)
		.expect(200)
		.expect("content-type",/json/)
		.end(function(err,res){
			console.log(res.body);
			done();
		})
	})

	it("should delete contact from database",function(done){


		/*var obj = {
			_id : "584bd9f4ece9482070c138d5",
			
		}


*/
		var contactId="584a5f076e758487e4a933ca";

		server.delete("/contact/" + contactId)
		.send(contactId)
		.expect(200)
		.expect("content-type",/json/)
		.end(function(err,res){
			console.log(res.body);
			done();
		})
	})


})