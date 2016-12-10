var chai = require("chai"),
expect = chai.expect;
should = chai.should();
var value='null';

describe("language chain test suite",function(){
	it("not assertions",function(){
		var foo="buck";
		expect(foo).to.equal('buck');
		foo.should.equal("buck");

		var poo = "man";
		expect(poo).to.equal("man");
		poo.should.equal("man");

		function sample(){
			//throw new Error("failed with error");
			return "Hello";
		}
		expect(sample).to.not.throw(Error);
		sample.should.not.throw(Error);

		var obj = { name: 'man'};

		expect(obj).to.have.property('name').and.not.equal('poo');

		obj.should.have.property("name").and.not.equal("poo");
	})

	it("deep assertion",function(){

		var obj= {city: "Hyderabad"};

		expect(obj).to.deep.equal({city: 'Hyderabad'});
	})

	var obj1 = {
		foo: {

			bar: {

				name: 'quux'

			}
		}
	}

	expect(obj1).to.have.deep.property('foo.bar.name','quux');

	var deepCss = { 

		'.link': { 

			'[target]': 42 

		}

	};
expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);

it("any assertion",function(){

		var sample = {

			name : "purnima",
			city : "Hyderabad",

		}

		expect(sample).to.have.any.keys('name', 'city','address','date');

		sample.should.have.any.keys('name', 'city','address','date');

})

it("all assertion",function(){

		var sample = {

			name : "purnima",
			city : "Hyderabad",
			state : "Telangana",
			date :"12/10/2016",

		}

		expect(sample).to.have.all.keys('name', 'city','state','date');

		sample.should.have.all.keys('name', 'city','state','date');

})

it("a nad an assertion",function(){

	expect('purnima').to.be.a('string');

	('purnima').should.be.a('string');

	expect({ foo: 'bar' }).to.be.an('object');

	expect("null").to.be.a('string');
	//('null').should.be.a(null);
	//should.be.value(null);

})

it("include assertion",function(){
	expect([1,2,3]).to.include(3);

	expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');


	})

it("property assertion",function(){

	var obj = { foo: 'bar' ,
				city : 'Hyd',

			};
		expect(obj).to.have.property('foo').to.be.equal("bar").with.length(3);
		//expect(obj).to.have.property('foo').to.have.property('city');

})

it("regular assertion",function(){

	expect("Hyderabad").to.match(/^Hyd/);
	expect('99foorbar99').to.match(/^[0-9,a-z]/);
})

})