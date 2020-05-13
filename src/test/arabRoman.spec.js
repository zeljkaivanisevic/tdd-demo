var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const converter = require("../arabRoman");

describe('arab to roman', function() {
    it('arabRoman should be a function', function () {
      converter();
    });

    it("za arabski 1 vrati rimski I", function() {
        assert.strictEqual(converter(1), "I"); 
    });

    it("za arabski 2 vrati rimski II", function() {
       assert.strictEqual(converter(2), "II"); 
    });

    it("za arabski 3 vrati rimski III", function() {
        assert.strictEqual(converter(3), "III"); 
     });

     it("za arabski 4 vrati rimski IV", function() {
        assert.strictEqual(converter(4), "IV"); 
     });

     it("za arabski 5 vrati rimski V", function() {
      assert.strictEqual(converter(5), "V"); 
   });

   it("za arabski 6 vrati rimski VI", function() {
      assert.strictEqual(converter(6), "VI"); 
   });
     it("za arabski 9 vrati rimski IX", function() {
      assert.strictEqual(converter(9), "IX"); 
   });

     

});