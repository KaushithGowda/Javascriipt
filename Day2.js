// name :: identifer
// let,var,constant,nothing :: variable
/*4 ways of declaring a variable
1.let
2.var
3.const
4.nothing*/

//let is blog scope :: it will be restricted to one identifier
let name="Javascript" // let variablName=literal
console.log(name)
/*let name="frontend"//error
console.log(name)*/

//var is local scope :: we can redeclare the variable as many times as required
var college="Golden days"
console.log(college)//Golden days
var college="Miss College days"
console.log(college)//Miss College days

//const :: used for constants
//constant value which cannot be changed
//const does not have any kinda of scope
const pi=3.142
console.log(pi)
/*const pi=5//error
console.log(pi)*/

//globe scope :: without any declarations 
cricket="sachin"
console.log(cricket);
//globe scope can be reassigned
cricket="kohli"
console.log(cricket);

/*
identifier validation
var 1name//error
var $name//valid
var _n1ame//valid
var _$nam#e//invalid(only $_ can be used in the variable name )
*/

//Datatypes

/*Primitive data types
1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.Symbol
7.BigInt*/

/*Non-Primitive data types
1.Arrays
2.Objects
3.Functions
4.RegExp(unoffical)*/

var age = 20
console.log(age);
//to check type of variable operator :: typeof
console.log(typeof age);

var avg = 99.7
console.log(avg);
//to check type of variable operator :: typeOf
console.log(typeof avg);

var occation="Mysore😂"
console.log(occation);
console.log(typeof occation);
console.log(typeof 'chikkamagluru😂');
console.log(typeof '10');

//white space collapse
var number2 =       10;
var number3 = 10;
console.log(number2);
console.log(number3);

//string white space
var number2 = '           10';
var number3 = 10;
// var number4 = 1      0;//error
console.log(number2);
console.log(number3);
// console.log(number4);

var areYouMarried //CamelCase should be followed
 
var AreYouMarried // PascelCase

//Boolean 
var AreYouMarried = true
console.log(AreYouMarried);

// var AreYouMarried = True//error
console.log(AreYouMarried);

// Single line comment

/*Multi-line comment
Multi-line comment
Multi-line comment*/

//undefined
var marks;
console.log(marks);

//undefined
var marks = undefined;
console.log(marks);

// var if;//error::keyword

var future = null;
console.log(future);
console.log(typeof future);//bug in js

//new datatype(eicma2015)
var newSymbol = Symbol("@345")
console.log(newSymbol);
console.log(typeof newSymbol);//symbol datatypes

var largestNumber=Number.MAX_SAFE_INTEGER
console.log(largestNumber);
result=Number.MAX_SAFE_INTEGER+10//after safe value the calculation answers will differ
result=9007199254740991+10//after safe value the calculation answers will differ
console.log(result);

//new datatype BigInt eicma15
var largestNumber=Number.MAX_SAFE_INTEGER
console.log(largestNumber);
// result=9007199254740991n+10//error :: cannot mix other datatypes with BigInt datatype
result=9007199254740991n+10n//n makes it a BigInt datatypes
console.log(result);

//mutation :: it is a process of changing variable to different datatypes as required by developers
var variable1=10
console.log(typeof variable1);
var variable1="10"
console.log(typeof variable1);
var variable1=10n
console.log(typeof variable1);

var iname="ronaldo"
var age=42
var isHeMarried=true
var totalWorth=80n

//type cohersion :: concatinating different datatypes
console.log("I am "+iname+" my age is "+age+" and if you ask me am I married? "+isHeMarried+" and my annual income is "+totalWorth);















