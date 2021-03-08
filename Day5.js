console.log("Hello World");

/*
Explicit type casting
Number() :: Number method converts any data type into number datatype and its a global method
parseInt() :: parseInt method converts any data type into number datatype and its a global method
    Note ::
     1.Spaces ignored by parseInt() and number 10 is displayed.
     2.Spaces considered by Number() and NaN is diaplayed.
     3.parseInt() neglects float values and display only whole number.
     4.parseFloat() will consider float values and displays.
     5.Number() will consider float values and displays it.
*/
// Number() will consider float values and displays it.
console.log(`The Number method ${Number(`10 10`)} and its type ${typeof Number(`10 10`)}`);

//parseInt() ignores spaces and number 10 is display
console.log(`The parseInt method ${parseInt(`10 10`)} and its type ${typeof parseInt(`10 10`)}`);

//parseInt() neglects float values and display only whole number.
console.log(`The parseInt method ${parseInt(`10 10`)} and its type ${typeof parseInt(`10 10`)}`);

console.log(`The parseFloat method ${parseFloat(`10 10`)} and its type ${typeof parseFloat(`10 10`)}`); 

//parseFloat() will consider float values and displays.
console.log(`The parseFloat method ${parseFloat(`10.10`)} and its type ${typeof parseFloat(`10.10`)}`);

/* Memory alocation
*Number :: 8 bytes 
*string :: 2 bytes*/
/* Gadgets
alert :: Output to user 
prompt :: Input from user
confirm :: Confirmation from the user
*/
// alert("Hey there")
// var data1 = alert("What's Up")
// console.log(data1); //undefined
// var data2 = confirm("Do you want to marry?")
// console.log(data2); //true
// var data3 = confirm("Entered details are Correct")
// console.log(data3); 
// input type of prompt is text :: hence any data entered will be of type String
// var data4 = prompt("Enter your name")
// console.log(data4);//Kaushith //if nothing is typed in the textbox :: null
// console.log(`The value of data4 ${data4} Type of data4 is ${typeof data4}`);//object

// var name = prompt("Whom you want to be with?")
// var confirmation = confirm(`Are you sure you want to marry ${name}`)
/*if (confirmation == true) {
    alert(`Take care of her`)
} else {
    alert(`Hope she is happy with someone else`)
}*/

//number datatypes is stored in format of IEEE double precision format 
// var operand1 = 20
// var operand2 = `15`// implicit cast :: converted to number format incase of */-
// var operand1 = 0.2 // floating values because of IEEE format
// var operand2 = 0.1 // floating values because of IEEE format 
var operand1 = -5 
var operand2 = 10 

var result1 = operand1+operand2//addition :: number input //concat :: number and String input
var result2 = operand1-operand2
var result3 = operand1*operand2
var result4 = operand1/operand2
var result5 = operand1%operand2
console.log(`The result of result1 is ${result1} and its types is ${typeof result1}`);
console.log(`The result of result2 is ${result2} and its types is ${typeof result2}`);
console.log(`The result of result3 is ${result3} and its types is ${typeof result3}`);
console.log(`The result of result4 is ${result4} and its types is ${typeof result4}`);
console.log(`The result of result5 is ${result5} and its types is ${typeof result5}`);

// var a = 6 //7
// var b = a++ //6 //post increment in memory level
        //6(a) 7(memory level of a)    
// var a = 6//7
// var b = ++a//7 //pre increment in memory level
     //7(memory level of a) 7(a)

// var a = 6
// var b = a++ + ++a

var a = 6
var b = --a
 //     5  5     
console.log(`The result of a ${a}`);
console.log(`The result of b ${b}`);























































