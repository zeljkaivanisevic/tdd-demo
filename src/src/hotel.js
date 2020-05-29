// ispis cijena hotela od najmanje do najveće - moje rješenje
let pricelist = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
]

function logPricelist(pricelist) {
    let ispis = ""
    let prethodni = {}
    pricelist.sort((a, b) => a.price - b.price)
    
    pricelist.forEach(function (a) {
        if (a.price == prethodni.price) ispis =ispis + ', ' + `${a.from} do ${a.to}`
        else ispis =ispis + '\n' + `${a.price} : ${a.from} do ${a.to}`
        prethodni = a
    })

    console.log(ispis)
}

logPricelist(pricelist)