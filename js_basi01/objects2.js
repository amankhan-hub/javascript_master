//const tinderuser=new Object()  //singleton
const tinderuser={
    name:"aman",
    age:18,
    address:{
        city:"lahore",
        society:"askari 10",
        parmannetaddress:{
            pcity:"rawalpindi"
        }
    }
}
//console.log(tinderuser["address"]["parmannetaddress"]["pcity"])

let obj1={
    a:"1",
    b:"2",
    c:"3"
}
let obj2={
    d:"4",
    e:"5",
    f:"6"
}
let obj3={
    g:"7",
    e:"8",
    h:"9"
}
let last=Object.assign({},obj1,obj2,obj3)
console.log(last)


let result={...obj1,...obj2,...obj3}
console.log(result);


let data={
    name:"aman"
    ,age:18
}
let {["name"]:nickname}=data           //easy way to access
console.log(nickname)  