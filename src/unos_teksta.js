let tekst="";
let brojac=0;
var readline = require('readline-sync');

while(rijec!='.'){
	var rijec = readline.question("Unesi rijec: ");
	tekst =tekst + " " + rijec;
	brojac++ 
 }

console.log("unesli ste ovaj broj rijeci: ",brojac-1);
console.log("ispis vašeg unešenog teksta: ", tekst);
