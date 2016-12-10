var chai = require("chai");
expect=chai.expect,
should=chai.should();

var isEven = require("../isEven");

	describe("---try these top----",function(){

	describe("try these test cases",function(){

		
		it("should return true if the number is even",function(){
			expect(isEven(4)).to.be.true;
			isEven(4).should.be.true;
		})

		it("should return false if the number is odd",function(){
			expect(isEven(3)).to.be.false;
			isEven(3).should.be.false;
		})
	})

	function add(num1,num2){
		return num1 + num2;
	}

	describe("check the functionality of beforeEach",function(){

		var num=5;

		beforeEach(function(){
			num=5;
		})

		it("should return 10 if we add 5 + 5",function(){
			num=add(num,5);
			num.should.be.equal(10);
		})

		it("should return 10 if we add 5 + 5",function(){
			num=add(num,7);
			num.should.be.equal(12);
		})
	})

	})