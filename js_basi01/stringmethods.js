/******************************String methods practice********************************/
let str=new String("Hello there!its me Aman")
let str1=new String(" and hello there!its me Bilal")

console.log(str.length)

console.log(str.charAt(0))

console.log(str.concat("and i am learning Javascript"));

console.log(str.concat(" "+str1))

console.log(str.startsWith("ali"))

console.log(str.endsWith("Aman"))

console.log(str.charCodeAt(0))     //give ascii value

console.log(str.codePointAt(1))    //give ascii value

console.log(str.toLocaleUpperCase())  //for the international language its valuable

console.log(str.toUpperCase())

console.log(str.toLocaleLowerCase())

console.log(str.toLowerCase())

console.log(str.slice(1,-5))      //not deal with the - at first place and donot include the index of the other place like -5

console.log(str.substring(-5,10))   //treat negative as 0 index and donot include secound place number

console.log(str.substring(-5,4))

let arr=str.split(" ")
for(let i=0;i<arr.length;i++)
{
    if(arr[i].match("me"))
    {
       arr[i]= arr[i].toUpperCase()
        
    }
    
}
console.log(arr.join(" "))

// Built in method of reversing a string
let anotherstring="Software"
console.log(anotherstring.split("").reverse().join(""))


//by simple  

let thereversedstr=""
for(let i=anotherstring.length-1;i>=0;i--)
{
    thereversedstr=thereversedstr+anotherstring[i]
    
    
}
console.log(thereversedstr);



let min=10;
let max=50;
console.log(Math.floor(Math.random()*(max-min+1))+min);








