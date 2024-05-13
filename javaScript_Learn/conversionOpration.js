// Number Conversion 

let score = "50"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let share = "198abc"
let stockShare = Number(share);

console.log(typeof stockShare);
console.log(stockShare);

let neha = ""
let nehaK = Number(neha);
console.log(nehaK);

let ecperiment1 = true
let experimental1 = Number(ecperiment1);
console.log(experimental1);

let ecperiment2 = false
let experimental2 = Number(ecperiment2);
console.log(experimental2);

let ecperiment3 = undefined
let experimental3 = Number(ecperiment3);
console.log(experimental3);

let ecperiment4 = NaN
let experimental4 = Number(ecperiment4);
console.log(experimental4);   

let ecperiment5 = "puja"
let experimental5 = Number(ecperiment5);
console.log(experimental5); 

// Note //
// "33" => 33
// 198abc => NaN
// true =>1, false => 0

// boolean Conversion
let isLogIn = 1
let booleanIsLogIn = Boolean(isLogIn)
console.log(booleanIsLogIn) // 1 => true

let zeroLogIn = 0
let booleanZeroconversion = Boolean(zeroLogIn)
console.log(booleanZeroconversion) // 0 => false

let isempty = ""
let emptyValueConversion = Boolean(isempty)
console.log(isempty) // "" => false

let stringValue = "puja"
let stringvalueInBooleanConversion = Boolean(stringValue)
console.log(stringValue); // "puja" => true

// string conversion 
let someSreingInnumber = 33
let convertInNumber = String(someSreingInnumber)
console.log(convertInNumber);
console.log(typeof convertInNumber)


// ************ Oprational ***********
let value = 3
let takeNegValue = -value 
// console.log(takeNegValue);
// console.log(2+2); // Addition
// console.log(2-2);// subtraction
// console.log(2*4); // mutiplecation
// console.log(2**5); // Two the power Five
// console.log(6/3); // Divesion
// console.log(5%2); // Remendar
 let str1 = "hello"
 let str2 = "Puja Bharti"
 let str3 = str1 + str2
 console.log(str3);
