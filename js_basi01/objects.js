// let x=Object.create
// x={
// name:"aman khan"
// }
// console.log(x)
let a=Symbol("password")
let x={
    name:"muhammad",
    age:18,
    country:"pakistan",
    [a]:"12345"
}
// console.log(x.name)     ///simple way not a good approach

// console.log(x["name"])   //as the compiler take the key as string 


// console.log(a.toString());
// console.log(a.description);   //two ways to check what is in the symbol

// for(let key in x)
// {
//     console.log(key)    //its skipping the symbol
// }

x.greeting=function()         //one way
{
    let age1=x["age"]
    console.log("hello"+age1)
}

x["greeting2"]=function()
{
    console.log(`this is the secound greeting ${this.name}`)
}
console.log(x.greeting())
console.log(x.greeting2())

console.log(x.a)   //issue
console.log(x[a])   //issue resoleved
