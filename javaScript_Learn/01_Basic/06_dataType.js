// ##### Primitive
//  7 Type: String, Number, Boolean, Null, Undefiend, Symbol, BigInt 
// const score = 100
// const ScoreValue = 100.05
// const isLogin = false
// const Outsidetamp = null
// let userEmail;
const id = Symbol('2925')
const anotherId = Symbol('2925')
console.log(id == anotherId);
const bigInteger = 2925393559875n;
// #### Non Primitive (Reference)
//  master in javaScript do first things master in Opject and master in Browser webevents 
//  Array, Object, Function
 const myArray = [ "Riya", "Nitin", "Rishit", "Rishita", "Kiaan", "Nityam"]
 const myOnject = {Name: "Riya", age: 14}
const myFunction = function(){
    console.log("hello World");
}
//  return myFunction;
console.log(typeof myArray);

// ////////////////////////////////////////////
// stack Memory (Primitive)  and heap Meomory (Non Promitive) 

///////////    Stack     ///////////////////
// Stack:- Jitne bhi apke primitive hai Eg:- Number, Booleans, String ye sab jate hia Stack me. stack ke andar jb
//  bhi koi value lenge apko uska coppy hi milta hai.

// ////////     Heap    ///////////////////
// Heap:- heap ke andar koi bhi value lenge apko uska Refrance hi milta hai. actualy jo bhi chnages krte hai jo
//  bhi update krte hai wo orignal hi milta hai.
let myName = "Puja"
let myFullNme = myName
 myFullNme = "Puja Bharti"
 console.log(myName);
 console.log(myFullNme);
 let firstUserId = {
    emailId: "puja@google.com",
    paymentId: "783748@ybl"
}
let secondUserId = firstUserId
secondUserId.emailId = "pujabharti@google.com"
console.log(firstUserId);
console.log(secondUserId);


