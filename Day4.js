console.log("Hello World");
var height = 15.4657//15
// var height = 15.6654//16
console.log(typeof height);

//.toFixed() :: returns rounded(whole) number of type string
var newHeight1 = height.toFixed();
//.toFixed(2) :: returns rounded(whole) number of type string i.e two places after the decimal values
// var newHeight = height.toFixed(2);//15.47
console.log(`The value of newHeight1 is ${newHeight1}`);
console.log(`The type of value in newHeight1 is ${typeof newHeight1}`);

//.toPrecision() :: returns complete number value of type string 
//.toPrecision(5) :: returns total of 5
var newHeight2 =  height.toPrecision()
// var newHeight2 =  height.toPrecision(5)//15.466
console.log(`The value of newHeight2 is ${newHeight2}`);
console.log(`The type of value in newHeight2 is ${typeof newHeight2}`);

//.toString() :: returns base10 value value of type String
//.toString(2) :: returns binary value of type String
//.toString(8) :: returns octal value of type String
//.toString(16) :: returns hexadecimal value of type String
var number1 = 35
var newNumber1 = number1.toString();
// var newNumber1 = number1.toString(2);//100011
// var newNumber1 = number1.toString(8);//43
// var newNumber1 = number1.toString(16);//23
console.log(`The value of newNumber1 is ${newNumber1}`);
console.log(`The type of value in newNumber1 is ${typeof newNumber1}`);

// var binaryNumber = 100011;//base10 // 100011

//0b should be used to make interpretor realize its a binaryNumber

var binaryNumber = 0b100011;//35
console.log(`The decimal equivalent of binary number is ${binaryNumber}`);

//0 should be used to make interpretor realize its a octalNumber
// var octalNumber = 023
// console.log(`The decimal equivalent of octal number is ${octalNumber}`); 

//0x should be used to make interpretor realize its a hexadecimalNumber
var hexadecimalNumber = 0xdf
console.log(`The decimal equivalent of hexadecimal number is ${hexadecimalNumber}`); 

// .toLocaleString() :: returns String but its a number of typr international type according to web browser
var number2 = 223678878
var newNumber2 = number2.toLocaleString()
console.log(`The value of newNumber2 is ${newNumber2} and its type is ${typeof newNumber2}`);

//returns number type specified values
var newNumber3 = number2.valueOf()
console.log(`The value of newNumber3 is ${newNumber3} and its type is ${typeof newNumber3}`);

var number3 = 22367878

// .toExponential() :: returns exponential values of type string
// .toExponential(2) :: returns exponential values to two places of type string
 
console.log(`The exponential value of number3 is ${number3.toExponential()} and its type is ${typeof number3.toExponential()}`);
console.log(`The exponential value of number3 is ${number3.toExponential(2)} and its type is ${typeof number3.toExponential(2)}`);

console.log(`The .MAX_SAFE_INTEGER is ${Number.MAX_SAFE_INTEGER}`);
console.log(`The .MIN_SAFE_INTEGER is ${Number.MIN_SAFE_INTEGER}`);
console.log(`The .MIN_Value is ${Number.MIN_Value}`);
console.log(`The .MAX_Value is ${Number.MAX_Value}`);
console.log(`The .POSITIVE_INFINITY ${Number.POSITIVE_INFINITY}`);
console.log(`The .NEGATIVE_INFINITY ${Number.NEGATIVE_INFINITY}`);
console.log(Number.NaN);

//Number :: method which converts any data type into number and its called global method
var age = 35;//number
// var age = `35`;//converted to number // explicit type cast
// var age = `35`;//converted to number // explicit type cast
// console.log(typeof Number(age));
console.log(`The String value of 10 is ${Number(`10`)} and its type is ${typeof Number(`10`)}`);
console.log(`The true value is ${Number(true)} and its type is ${typeof Number(true)}`);
console.log(`The false value is${Number(false)} and its type is ${typeof Number(false)}`);
console.log(`The String value is ${Number(`true`)} and its type is ${typeof Number(`false`)}`);

console.log(`The space in between number is ${Number(`10 10`)} and its type is ${typeof Number(`10 10`)}`);//NaN //cannot convert space into a number
console.log(`The decimal value of a number is ${Number(`10.10`)} and its type is ${typeof Number(`10.10`)}`);//NaN //cannot convert space into a number

//parseInt :: method which converts any data type into number and its called global method
console.log(`The parseInt value is ${parseInt(10.23)} and its type is ${typeof parseInt(10.23)}`);









































































