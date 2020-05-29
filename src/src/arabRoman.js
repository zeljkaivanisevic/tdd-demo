//R-G-R
//1.funkcija ne smije biti dulja od 5-6 redaka
//2.single responsibility principal
//3.no code duplication
//4.no ifs
//a strukture podataka su superiorne kodu
//b. bez prijevremene optimizacije
//pretvorba arapskih brojeva u rimske - prvo rjesenje

const brojevi = {
    IX:9,
    VI:6,
    V:5,
    IV:4,
    III:3,
    II:2,
    I:1,
};
 
const converter=(a)=>{
    var roman= ''
    for (i in brojevi){
        while (a >=brojevi[i] && a<4000 && a>0){
            roman =roman +i
            a = a-brojevi[i]
        }
    }
    return roman
}



module.exports = converter;