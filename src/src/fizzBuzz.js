//R-G-R
//ako se upise broj dijeljiv s 3 ispiše se fizz, ako je dijeljiv s 5 buzz, a ako je dijeljiv i s 5 i s 3 ispiše fizzzbuzz
function fizzBuzz(num) {
    let result = [];
    if(num%3 == 0) result.push("Fizz");
    if(num%5 == 0) result.push("Buzz");
    return result.join("") || undefined;
}

module.exports = fizzBuzz;