const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber = 23.987
console.log(othernumber.toPrecision(2));

const othernumber1 = 123.987
console.log(othernumber1.toPrecision(2));

const othernumber2 = 123.987
console.log(othernumber2.toPrecision(5));

const multipalZero = 1000000
console.log(multipalZero.toLocaleString('en-IN'));

////////////////////// Maths /////////////////////////////

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2, 4, 20, 0, 1));
console.log(Math.max(99, 6, 4, 10 ));
console.log(Math.random()); // Math me randaom ki value hmesha 0 or 1 me.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


