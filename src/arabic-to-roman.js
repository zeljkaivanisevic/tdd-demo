//pretvorba arapskih brojeva u rimske - dobro rjesenje
const arabicToRomanMap = {
    1 : "I",
    4 : "IV",
    5 : "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
    90: "XC",
    400: "CD",
    900: "CM",
    0: ""
};

function arabicToRoman(num) {
    let roman = arabicToRomanMap[num];
    if(roman !== undefined) return roman; 
    roman = "";
    let numToSubstract = getNumToSubstract(num);
    let rest = num % numToSubstract;
    let times = (num - rest)/numToSubstract
    roman += new Array(times).fill(arabicToRomanMap[numToSubstract]).join("");
    

 roman = roman + arabicToRoman(rest);


   
    return roman;
}

function getNumToSubstract(num) {
    return Object.keys(arabicToRomanMap)
        .map((n)=>parseInt(n)).filter((arabic)=>arabic <= num)
            .sort((n1, n2)=>(n2-n1))[0];  
}

module.exports = arabicToRoman;

// Strukture podataka su superiorne logici (Podrazumjevaju vještinu baratanja algoritmima i strukturama podataka)
// Bez prijevremene optimizacije
// U pravilu birajte portabilnost i modularnost pred performansama

//pravila:
// Descriptive long names 
// Single responsibility principle 
// Short methods (functions, classes)
// No code duplication 
// Short methods (classes)
// Max 3 Arguments per method
// Avoid (or no) conditionals (actually no flags) 
// Avoid (or no) loops (breaks, continue, conditions)
//     - loop_switch anti pattern (higly dependent on language)
//     - the goal is to use map, reduce, filter, times - standard array functions
// “No null” pattern & “No primitives obsession”
