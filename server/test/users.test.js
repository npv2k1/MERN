//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("./../bin/www");
let should = chai.should();
const expect = require("chai").expect;
chai.use(chaiHttp);
//Our parent block
describe("Users", () => {
  beforeEach((done) => {
    //Before each test we empty the database in your case
    done();
  });
  /*
   * Test the /GET route
   */
  describe("/GET listusers", () => {
    it("it should GET listusers", (done) => {
      chai
        .request(server)
        .get("/api/admin/listusers")
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("array");
        //   res.body.length.should.be.eql(9); // fixme :)
          done();
        });
    });
  });
 describe("Simple Math Test", () => {
   it("should return 2", () => {
     expect(1 + 1).to.equal(2);
   });
   it("should return 9", () => {
     expect(3 * 3).to.equal(9);
   });
 });
});
