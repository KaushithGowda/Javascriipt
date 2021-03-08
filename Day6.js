console.log(`Hello World`);

/*
 Operators 
*/

/*
Unary Operator :: functionality of unary operator is same as Number() but unary operator is operator and Number() is global method 
Syntax :: +<value>
*/

var value1 = +`3.4`
console.log(`The value1 is ${value1} and its type is ${typeof value1}`)
var value2 = +`3 4`
console.log(`The value2 is ${value2} and its type is ${typeof value2}`)
var value3 = +3.4
console.log(`The value3 is ${value3} and its type is ${typeof value3}`)

/*
Unary Negation Operator ::  functionality is same as unary operator except it gives out negative values
*/
var value4 = -`3.4`
console.log(`The value4 is ${value4} and its type is ${typeof value4}`)
var value5 = -`3.4`
console.log(`The value5 is ${value5} and its type is ${typeof value5}`)
var value6 = -`3.4`
console.log(`The value6 is ${value6} and its type is ${typeof value6}`)

/*
Exponential Operator
Syntax :: **
*/

var value7 = 5
console.log(`The Exponential value of value7 is ${value7 ** 2}`);

// prompt() takes input as string so use Number() or parseFloat()
/*
var value8 = parseFloat(prompt(`Enter a value1`))
var value9 = parseFloat(prompt(`Enter a value2`))
*/
// Greater than :: >
// alert(`The result is ${value8 > value9}`)

// Lesser than :: <
// alert(`The result is ${value8 < value9}`)

// Lesser than or equal to :: <=
// alert(`The result is ${value8 <= value9}`)

// Greater than or equal to :: >=
// alert(`The result is ${value8 >= value9}`)

/*
Equality operator :: only values are compared not the datatypes;returns boolean
Syntax :: ==
*/
console.log(3 == 3);//true
console.log(`3` == 3);//true :: values are compared not the datatypes that is why result is true 
console.log(`Hello` == `Hello`);//true
console.log(`30` == 3);//false

/* 
Strict Equality operator ::  both datatypes and values are compared;returns boolean
Syntax :: ===
*/
console.log(3 === 3);//true
console.log(`3` === 3);//false

/* 
In-equality operator :: only values are compared not the datatypes;returns boolean
Syntax :: !=
*/
console.log(3 != 3);//false
console.log(`3` != 3);//false
console.log(3 != 5);//true

/* 
Strict In-equality operator ::  both datatypes and values are compared;returns boolean
Syntax :: !==
*/
console.log(3 !== 3);//false
console.log(`3` !== 3);//true

console.log(true == 1);//true
console.log(false == 0);//true

console.log(true == 0);//false
console.log(false == 1);//false

console.log(false === 0);//false :: changes in datatypes hence,false
console.log(true === 0);//false :: changes in datatypes hence,false

/**
 * Logical Operators :: 
 * Logical AND :: &&
 * Logical OR :: ||
 * Logical NOT :: !
 * Logical XOR :: ^
*/

//Logical AND
console.log(false && false);//false
console.log(false && true);//false
console.log(true && false);//false
console.log(true && true);//true

//Logical OR
console.log(false || false);//false
console.log(false || true);//true
console.log(true || false);//true
console.log(true || true);//true

//Logical NOT
console.log(!false);//true
console.log(!true);//false

/**
 * Bitwise AND :: &
 * Bitwise OR :: |
*/

// Bitwise AND
var value9 = 23
var value10 = 16
console.log(`The binary equivalent of value9 ${value9.toString(2)}`);
console.log(`The binary equivalent of value10 ${value10.toString(2)}`);
//AND operation is performed bitwise from value9 and value10
//value9 = 23 :: 1011
//value10 = 16 :: 1000
//result = 16 :: 10000(binary equivalent)
var resultAND = value9 & value10
var resultOR = value9 | value10
console.log(`The resultAND is ${resultAND}`);
console.log(`The resultOR is ${resultOR}`);

//Conversion of binary to decimal
var binary1 = 0b10000
console.log(binary1);//16

var binary2 = 0b10111
console.log(binary2);//23

/**
 * Ternary operator :: returns boolean
 * Syntax :: <condition> ? value1 : value2 
 * Example :: (2>3) ? value1 : value2
 *             (condition) ? value1 : value2
 *                            true  : false
*/

console.log((2>3) ? `I am in` : `I am out`);
console.log((2<3) ? `I will be returned if its true` : `I will be returned if its false`);
console.log((2>3) ? `I will be returned if its true` : `I will be returned if its false`);

var age = 19
console.log((age>18) ? `You can ride motorcycle` : `You can ride cycle`);

/**
 * Assignment Operator :: 
 *      =
 *      += Addition Assignment
 *      *= Multiplication Assignment
 *      %= Modulus Assignment
 *      /= Division Assignment
 *      -= Subtraction Assignment
 *      >= Greater than Assignment
 *      <= Lesser than Assignment
*/

var a = 20
var newA = a += 10 //a = a+10
console.log(newA);

var b = 20
var newB = b -= 10 //b = b+10
console.log(newB);

var c = 20
var newC = c %= 10 //c = c%10
console.log(newC);

var d = 20
var newD = d /= 10 //d = d/10
console.log(newD);

/**
 * Operator Persidence Rule :: Table of Presidence
 * BODMAS :: not applicable in js
*/
var result = 3+4*5









































