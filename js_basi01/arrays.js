/*//Two way to inital the array
 
let arr1=[1,2,3,4,5,6]

// the other way

let arr2=new Array(5,6,7,8,9,10)


//shallow copy same reference

let arr3=arr1;
arr3.push(2)
console.log(arr1)
console.log(arr3)

arr3.pop()   //the last value would be deleted

console.log(arr3)

console.log(arr3.unshift());  //add the first elements

console.log(arr3)

console.log(arr3.shift());  //remove the first elements

console.log(arr1.includes(2))  //true false

console.log(arr1.indexOf(2))
console.log(arr1)
//console.log(arr1.findIndex(2<10))

console.log(arr1.find(element => element <= 2))
console.log(arr1.findIndex(element=>element<=2))

let arr=[8,5,6,7,8,9,6,4,4,322,2]
let compare=function(a,b)
{
    return a-b
}
//console.log(arr.sort(compare))

//console.log(arr.reverse())

arr.pop()
arr.push(255)

arr.shift()
console.log(arr)
arr.unshift(25555)
console.log(arr)



let a=[5,4,6,3,2,1,2]
let b=[20,70,80]
console.log(a.concat(b).join()," ")

console.log(typeof a.join())
*/


let thisarr=["aman","nabeel","bilal","minahil","hafsa","aman"]
let thisarr2=[1,2,3,4,5,6]
//let x=Array.isArray(thisarr)
//console.log(x)
//console.log(thisarr.indexOf("aman"));
//console.log(thisarr.lastIndexOf("aman"));
//console.log(thisarr.includes("mehreen"));
//console.log(thisarr.includes("aman"));
/*let x=function(name)
{
    return name>=2
}
console.log(thisarr2.every(x))*/


let f=function (number)
{
    return number<=4 &&number>=2
}
console.log(thisarr2.filter(f))
console.log(thisarr2)
console.log(thisarr2.valueOf())


let make="aman"
let madearray=Array.from(make)
console.log(typeof madearray)
console.log(typeof make)
let otherarray=["sana","minahil"]
let merge=[...madearray,...otherarray]
console.log(merge.sort())


