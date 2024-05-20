/// Date
let myDate = new Date()   
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

let createDate = new Date(2024, 4, 20)
console.log(createDate.toDateString());

let createIndianDate = new Date("2024-01-14")
let createIndianDate1 = new Date("01-14-2024")
console.log(createIndianDate.toLocaleString());
console.log(createIndianDate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createIndianDate1.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
`${newDate.getMonth() + 1 } here is th time`

newDate.toLocaleDateString('default', {
    weekday: "long",
    
})