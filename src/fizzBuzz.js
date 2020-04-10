function fizzBuzz(a) {
let result;   
if (a %3 == 0) result = 'Fizz' 

if (a %5 == 0)  result = 'Buzz'

return result;

}

module.exports = fizzBuzz;