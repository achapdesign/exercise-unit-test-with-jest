const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

const oneEuroIs = {
    'JPY': 127.9,
    'USD': 1.2,
    'GBP': 0.8,
}
const tenEurosIs = {
    'JPY': 1279,
    'USD': 12,
    'GBP': 8,
}

let fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
module.exports = { sum, fromEuroToDollar }

let fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9 * 1.2;
    return valueInYen;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen }

let fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.006254 * 1.2;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
