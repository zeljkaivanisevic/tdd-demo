// računanje broj dana u godini, npr 1.1. - 1 dan; 1.2.-32 dana
function dayOfYear(y, m, d){
    let  months= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



let sum=0;
for(var i=0; i<m-1; i++){
    sum+=months[i]
}

let a= (y%400===0) || ((y%4===0) && (y%100!==0))

if(m>2 && a){

    sum+=1;
}


return (sum + d);
}
module.exports = dayOfYear;