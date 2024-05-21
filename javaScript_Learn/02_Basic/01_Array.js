/// Array 
const myArray = [1, 2, 3, 4, 5, 6]
const myHero = ["Naresh Prasad", " Sudhanshu Kumar", "Bachchi Devi"]
const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray[1]);
// Array Methods
// myArray.push(2)
// myArray.push(7)
// myArray.pop()
// myArray.shift();
// myArray.unshift(9);
// console.log(myArray);
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArray = myArray.join();
// console.log(myArray);
// console.log(typeof newArray);
// slice & splice




const logArray = [1, 2, 3, 4, 5, 6, 7]
// console.log(logArray);
console.log("A",  logArray);

const nLongArray = logArray.slice(1, 3)

console.log("B",  logArray);
console.log(nLongArray);

const newLongArray = logArray.splice(1, 3)
console.log("C",  logArray);
console.log(newLongArray);

/////////////////////////////////////////////////////////////////

const myFemaleFamily = ["Bachchi Devi", "Suman Devi", "Prabha Devi" ]
const myMale = ["Naresh Prasad", "Parash Nath Prasad", "Jagat Narayan Sinha"]
myFemaleFamily.push(myMale)
console.log(myFemaleFamily);
console.log(myFemaleFamily[3]);
console.log(myFemaleFamily[3][0]);
const allfamily = myFemaleFamily.concat(myMale)
console.log(allfamily);

// Spraid oprator
const newAllFamily = [...myFemaleFamily, ...myMale]
console.log(newAllFamily);

// Array ke Andar Array
const anotherFamily = ["Bachchi Devi", "Naresh Prasad", ["Minu",  "Puja", "Sudhanshu" ] , "Suman Devi", "munna", "Tinku", "Rekha",  "Prabha Devi", ["sonam", "chhotu", ["Jagat Narayn Sinha", ["Data"]]]]
const anotherFullFamily = anotherFamily.flat(3)
console.log(anotherFullFamily);

// console.log(Array.isArray("pooja Bharti"));
// console.log(Array.from("pooja Bharti"));
console.log(Array.from({name: "pooja Bharti"})); // Interesting covert object in to array output is empty

const score1 = 100
const score2 = 200
const score3 = 300 
console.log(Array.of(score1, score2, score3) );
// important Array
// flat, from, of






