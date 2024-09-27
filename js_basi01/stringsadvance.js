let name="Aman"
let repoCount="50"
console.log(`helo my name is ${name} and my RepoCount is ${repoCount}`);  //String interpolation  things can be done on the go
                                                                        //like toupparcase etc


let str=new String('Aman is a good boy')      //the other way to initial the string
console.log(str);
console.log(str.replace('Aman','Aslam'));
console.log(str);

let check={
    name:"aman",
    phone:"0335"
}
  let check2=check
name1=check.name.replace("aman","kiran")      //return string not assign for that we have stored in a variable
check2.name=name1
console.log(check)



/*Some String Functions*/
let someStr=new String('My name is Aman')
let numberofstr=someStr.length
console.log(numberofstr)

let upparcase=someStr.toUpperCase()
console.log(upparcase);            // iam directly assesing the the main variable it can be done but if using other it will provide me copy
someStr=upparcase
console.log(someStr);


let otherstr=someStr
otherstr=new String('aman')   //Example
console.log(someStr);
console.log(otherstr);


let newstr=otherstr.slice(-1,0)          
console.log(newstr);












                                                                        

