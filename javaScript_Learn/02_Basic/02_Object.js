// const use = new Object()
const usert = {}
usert.id = "puj123"
usert.name = "puja"
usert.islogin = false
console.log(usert);

const regularuser = {
    email: "bharti.nitp@gmial.com",
    regularuser : {
        userfullName: {
            firstName : "Pujan ",
            lastName: "Bharti"
        }
    }
}

console.log(regularuser);
console.log(regularuser.regularuser.userfullName.firstName);
console.log(regularuser.regularuser);
console.log(regularuser.regularuser.userfullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = {obj1, obj2}
const obj5 = Object.assign({},  obj1, obj2, obj3)
const obj6 ={...obj1, ...obj2, ...obj3 }
console.log(obj6);

const users = [
    {
        id: 2345,
        email:" weuseremail@gmail.com",

    },
    {
        id: 2222,
        email:" myuseremail@gmail.com",
        
    },
    {
        id: 5555,
        email:" youruseremail@gmail.com",
        
    },
    {
        id: 44445,
        email:" heruseremail@gmail.com",
        
    } 

]
users[1].email
console.log(usert);
console.log(Object.keys(usert));
console.log(Object.values(usert));
console.log(Object.entries(usert));
console.log(usert.hasOwnProperty('islogin'));
console.log(usert.hasOwnProperty('nae'));