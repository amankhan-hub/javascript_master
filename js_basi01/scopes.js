// function one()
// {
//     let name="aman"
//     function two(){
//         console.log(name)
//     }
//     two()
// }
// one()

// if(true)
// {
//     let username="aman"
//     if(username==="aman"){
//         let website="youtube"
//         console.log(username);
//     }
    
// }

// //add(2)           //can be access after the body of the function
// const add=function add(num1)
// {
//     return num1
// }
// add(2)

// addtwo(2)            //can be access before and also after the body
// function addtwo(num1)
// {
//     return num1
// }

//  const user={
//     username:"aman"
//     ,price:999,
//     welcome:function(){
        
//         console.log(`${this.username} welcome to the website`);       //current context refer  
//         console.log(this)
//     }
   
//  }
//  console.log(user.welcome())
// user.username="sam"
// user.welcome()
// console.log(this)           //node environment does not refer to any thing

// function chai(){
//     let username="aman"
//    console.log(this.username)   //cant be accessed in function using this
//     console.log(this)    //it has some values when being used in the fuctions
// }
// chai()

// const add=(num1,num2)=>{

//     console.log(this)
//     return num1+num2
// }
// console.log(add(4,9))

// //other way  explicit return

// const add2=(num1,num2)=>num1+num2
// console.log(add2(7,7))




// const add3=(num1,num2)=>({name:"aman"})     ///need to wrap the object into brackets aS THE OBJECT USE THE CURLY BRACKET TO BE USED
// console.log(add3(3,5))





