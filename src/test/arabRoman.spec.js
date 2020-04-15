var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const arabRoman = require("../arabRoman");

describe('arab to roman', function() {
    it('arabRoman should be a function', function () {
       arabRoman();
    });

    it("za arabski 1 vrati rimski I", function() {
        assert.strictEqual(arabRoman(1), "I"); 
    });

    it("za arabski 2 vrati rimski IV", function() {
       assert.strictEqual(arabRoman(2), "II"); 
    });

    it("za arabski 3 vrati rimski IV", function() {
        assert.strictEqual(arabRoman(3), "III"); 
     });

     it("za arabski 4 vrati rimski IV", function() {
        assert.strictEqual(arabRoman(4), "IV"); 
     });

     it("za arabski 5 vrati rimski IV", function() {
        assert.strictEqual(arabRoman(5), "V"); 
     });

     it("za arabski 6 vrati rimski IV", function() {
        assert.strictEqual(arabRoman(6), "VI"); 
     });

     

});