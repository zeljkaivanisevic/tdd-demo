//R-G-R
function fizzBuzz(num) {
    let result = [];
    if(num%3 == 0) result.push("Fizz");
    if(num%5 == 0) result.push("Buzz");
    return result.join("") || undefined;
}

module.exports = fizzBuzz;