let var1=new Date()
var1.setDate(23)
console.log(var1)

console.log(var1.toDateString())
console.log(var1.getDate())
console.log(var1.getDay());
console.log(var1.getFullYear())
console.log(var1.getMonth())
console.log(`The today day is ${var1.getUTCDay()} and the date is ${var1.getUTCDate()}/${var1.getUTCMonth() + 1}/${var1.getUTCFullYear()} and the time is ${var1.getUTCHours()}:${var1.getUTCMinutes()}:${var1.getUTCSeconds()}:${var1.getUTCMilliseconds()}`);


