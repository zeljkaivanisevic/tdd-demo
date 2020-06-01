var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const dayOfYear = require("../dayOfYear");

describe('day of year test', function() {
    it('2012,1,1 -> 1', function () {
      expect(dayOfYear(2012,1,1)).to.eq(1);
    });

    it('2012,2,1 -> 32', function () {
        expect(dayOfYear(2012,2,1)).to.eq(32);
      });

    it('1900,3,1 -> 60', function() {
        expect(dayOfYear(1900,3,1)).to.eq(60);
    });  

});