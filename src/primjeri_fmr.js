const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]




const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]





const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(reducer, 5));
// expected output: 15




//  function join_with_spaces(arr, token){
//      arr = ((acu, curr, index, arr)=>{

//         acu = acu + curr;
//          if (index< arr.length-1) ? acu = acu + " " +token;
//         arr.reduce(acu)
//         return acu;
        
//     });
//      console.log( arr.reduce(acu))
//  }

// Array.prototype.join_with_spaces = join_with_spaces;

//  let myarr = ["ime", "nema"];
//  myarr.join_with_spaces("i");

