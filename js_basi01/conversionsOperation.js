let score="33";                /*checking the value of the the variable we are checking might be value 
                             coming from backend we dont know*/
 console.log(typeof(score));

let valueInNumber;
valueInNumber=Number(score);
console.log(typeof(valueInNumber));

let date="1jan"
let dateinnumber=Number(date)
console.log(dateinnumber)  /*but what if we change the string to number the 
                           *string having numbers  NaN   33abc=>NaN*/ 

                           /*the conversion can be of string to number then NaN
                        *boolen to number 1/0
                        *null then 0
                        *undefined then NaN

                        Boolean
                        String
                        Number
                        1=>true ,0=>false
                        ""=>false,"Aman"=>true
                         */
let range=33
let rangeinstring=String(range)
console.log(typeof (rangeinstring))


/*********************Operations****************** */
let value=3
let negvalue=-value
console.log(negvalue)

console.log("1"+2); //it will take the first them decide in which form it will execute depend upon the string
console.log(1+2);
console.log(1+"2");

let x=5,y;
y=x++;
console.log(y);     //x++ --x same in beddining but show xchange when ben assigned to y
console.log(x);








                                        

