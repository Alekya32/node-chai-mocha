var assert=require("chai").assert,
    expect=require("chai").expect,
    should=require("chai").should()

var supertest=require("supertest")
var server=supertest.agent("http://localhost:1337")
    
describe("testing contactList API",function(){
      
    it("Should get all contacts",function(done){
        server.get("/getContacts")
            .expect(200)
        .expect('content-type',/json/)
        .end(function(err,res){
            console.log(res.body);
            res.body.forEach(function(data){
                data.should.have.property("name")
                data.name.should.equal("BCCC")
                data.name.should.have.lengthOf(4)
            })
            done();
        })
        })
});
       /*var foo="Alekya";
        var tea={
            flavors:"ok"
        };
        //var foo=1;
        //assert.typeOf(foo, 'string');
        
        //expect(foo).to.be.a('string');
        foo.should.be.a('string');
        foo.should.equal('Alekya');
        foo.should.have.lengthOf(6);
        tea.should.have.property('flavors')
       // .with.lengthOf(3)
    })*/
   


/*describe.only("This is my second test suite",function(){
        before("Before hook",function(){
            console.log("This is before hook")
        })
    after("After hook",function(){
        console.log("This is after hook")
    })
    beforeEach("This is Before Each",function(){
        console.log("This is before each hook")
    })
    afterEach("This is After Hook",function(){
        console.log("This is after each hook")
    })
    
    it.only("my first test case",function(){
        console.log("Firsst test case")
    })
    it("Second test",function(){
        console.log("second test case")
    })
    it("third test",function(){
        console.log("second test case")
    })
})*/