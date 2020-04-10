var assert = require('assert');
const fizzBuzz = require("../fizzBuzz");
describe('fizz buz problem', function () {
    it('fizzBuzz should be a function', function () {
        fizzBuzz();
    });
    it('if djeljivo sa 3 ispiši Fizz', function () {
        let result=fizzBuzz(3)
       assert.equal(result,"Fizz")
    });
    it('if djeljivo sa 5 ispiši Buzz', function () {
        let result=fizzBuzz(5)
       assert.equal(result,"Buzz")
    });
  
});

//R-G-R