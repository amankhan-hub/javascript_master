/* Primitive(Stack) and Non Primitive(Heap)
The primitive make a copy and the change is done in the copy*/


//******************Primitive********************** */ 

let str1="Ali is a Good Boy"
let str2=str1;
console.log(str1);
console.log(str2);

/*but if we change in the str2*/
str2="no aman is a good boy"
console.log(str2);               //The primitive data make a copy and change is done in that copy


//******************Non Primitive********************** */

/*The  non primitive does not make a copy the change is done in the orignal in heap as its is stored in heap*/

let data={
    email:"aman.khan@gmail.com"
    ,password:"12345"
}
let data2=data
console.log(data)
console.log(data2)

data2.email="laiba.khan@gmail.com"
console.log(data)          //here the both is being change as the  
console.log(data2)         //change is done in the data2 only which shows the heap the orignal data is being changed


//Example for Function
let adding=function add(a,b){
   return a+b
}
console.log(adding(5,6))



