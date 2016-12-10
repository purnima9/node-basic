

/*describe("my first test suite",function(){
	it("should return true");
	assert(true,"fails with false")

})*/

//var assert = require("assert");
var assert = require("chai").assert;
var expect =require("chai").expect;
var should =require("chai").should();
describe("My First Test Suite",function(){
before("Before Every test case" , function(){
console.log("I'm before")
})
beforeEach("Before Every test case" , function(){
console.log("I'm beforeEach")
})

after("Before Every test case" , function(){
console.log("I'm `after")
})

afterEach("Before Every test case" , function(){
console.log("I'm before afterEach")
})

it("should return true",function(){
console.log("Success");
//assert(true,"fails with false")
//expect(true).to.be.true;
//(true).should.be.true;
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
it("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
/* it.skip("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
it.only("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
it.only("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});*/

})
/*describe.skip("My Second Test Suite",function(){
it("should return true",function(){
console.log("Success");
//assert(true,"fails with false")
//expect(true).to.be.true;
//(true).should.be.true;
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
it("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
it.skip("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
it.only("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});
it.only("should return true",function(){
var name ="Scott";
expect(name).to.be.string;
expect(name).to.be.equal("Scott");
});

})*/
