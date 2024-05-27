
// function sayMyName() {
//     console.log("P");
//     console.log("o");
//     console.log("o");
//     console.log("j");
//     console.log("a");
// }
// sayMyName() // here  sayMyName is refrence, () is execution.
// function addMynumber(number1, number2) {
//     console.log(number1 + number2);
// }
// addMynumber(5, 6)
// addMynumber(4, "a")
// addMynumber(4, "8")



//  function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
//  }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2

    // return result /// Return krne ke baad koi bhi function kam nhi krega
    // console.log("Pooja");    // ye kabhi bhi exicute nhi hoga kyu ki by default function kr definition ka ek rule hota hai. return ke bad koi bhi function exicute nhi hota hai.
    return  number1 + number2   // direct bhi ise return kr shkye hai  and jb bhi hm return krte hai to use variable me store kr shkte hai sirf console log se nhi print kr shkte hai.
}
 const results = addTwoNumbers (45, 5)
 console.log("Result :", results);

//  value hm ar kitne tarike se le shkte hai

// 1 
function loginUserMessage(UserName) {
    return `${ UserName } Just Logged in `
}
console.log(loginUserMessage("Sudhanshu"));

// 2
function loginUser(userName){
    //if (!userName){  console.log("Please Enter a UserName");   return } 

    // or

    if (userName === undefined) {
        console.log("Please Enter a UserName");
        return
    }
    return `${userName} Just Logged In `
}
console.log(loginUser()); // Undefined

// 3
function loginUser1(userNameL = "Shubham"){
  
    return `${userNameL} Just Logged In `
}
console.log(loginUser1());  // agr hm kuchh bhi pass nhi krenge to minimum Shubham value pash hogi
console.log(loginUser1("Munna")); // agr hm yaha pe value pass krenge to overwrite kr di jayegi, Munna value pass hogi 

function calculatePrice(num1){ // ... this is called rest oprator and spred oprator
    return num1
}
console.log(calculatePrice(3));

function calculatePrice1(...num1){ // ... this is called rest oprator and spred oprator
    return num1
}
console.log(calculatePrice1(3, 4, 4, 6, 89, 3000, 400, 500));

function calculatePrice2(val1, val2, ...num1){ // ... this is called rest oprator and spred oprator
    return num1
}
console.log(calculatePrice2(100, 700, 3000, 400, 500));

const user = {
    userName : "Puja Bharti",
    productOrder : "Camera",
    price : 45000
}
function handelObject(anyObject){
    console.log(`UseName is ${anyObject.userName}, Product is ${anyObject.productOrder} and price is ${anyObject.price} `);
}

// handelObject(user)  

// yaha hm is tarh se bhi object pss kr shakte the
handelObject({
    userName : "Sudhanshu Kumar",
    productOrder : "Shoes",
    price : 15000
})

const myNewArray = [100, 300, 400, 500, 800] // Yah pe bhi Array value le shkte hai
function secondmethodArray (paraArray){
    return paraArray[1]
}
// console.log(secondmethodArray(myNewArray)); //
console.log(secondmethodArray([200, 600, 1000])); /// yah pe hm direct Array le shkte hai