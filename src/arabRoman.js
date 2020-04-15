//R-G-R
function arabRoman(num) {
    
    if(arabRoman1(num) ) return arabRoman1(num) ;
    if(arabRoman2(num) ) return arabRoman2(num) ;
}

function arabRoman1(num) {
    
    if(num == 1) return "I";
    if(num == 2) return "II";
    if(num == 3) return "III";
}

function arabRoman2(num) {
    
    if(num == 4) return "IV";
    if(num == 5) return "V";
    if(num == 6) return "VI";
}

module.exports = arabRoman;