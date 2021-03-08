console.log("Hello World");

//****************************************************
//Splice(Start index, noOfElementsToBeRemoved, `dataToBeAdded`)
//Splice will change the orginal Array

var myArray = [10,20,`avesh`,true,`True`]
myArray.splice(1,3,`Apple`)

//[10,"Apple","True"]
console.log(myArray);

//Consumes lot of time
var value1 = 9
var value2 = 10

var res1 = value1 + value2
console.log(res1);

var value3 = 10
var value4 = 12

var res2 = value3 + value4
console.log(res2);

//NormalFunction 

/*
Syntax ::
function FunctionName(`<parameters/Actual parameters>`){
    <Body of function>
}

Addition(arguments/Formal parameters)
*/


// add(50,150)//Executes

function add(value1,value2) {
    result = value1+value2
    console.log(result);
}
add(10,20)
add(100,400)
add(50,150)

//Only One param sent //other is undefined //10+undefined=NaN
add(50)//NaN

//Other Param will be ignored
add(50,150,50)//200

add(50,undefined)//NaN
console.log(typeof add());//undefined
console.log(typeof add);//function

function sub(value1,value2) {
    result = value1-value2
    return result//control goes back to sub function call
    console.log(result);//unreachable
}
console.log(sub(30,20));

function sample(value1,value2) {
    result = value1-value2
    return `Javascript`//control goes back to sub function call
}
console.log(sample(10,20));

function sample2(value1,value2) {
    result = value1-value2
    return `Javascript`,20,`hi`
}
console.log(sample2(10,20));

function sample3(value1,value2) {
    result = value1-value2
    return `Javascript is fun`
}

var returnedMessageHolder = sample3(10,20)
console.log(returnedMessageHolder);

//typeof
console.log( typeof function sample4(value1,value2) {
    result = value1-value2
    return `returnedMessage`
    }
);

// Anonyonmos function :: function without a name
//assigning to a variable

var add = function(value1,value2) {
    result = value1*value2
    return result
}
console.log(add(10,5));

// add2() //error //cannot call an anonynomos function before function
var add2 = function(value1,value2) {
    var result = value1*value2
    console.log(result);
    return `abc`
}
add2(10,20)

//Arrow function :: Normal function different syntax
var sub = (value1,value2)=>{
    var result = value1*value2
    console.log(result);
    return `abc`
}
console.log(sub(20,3));


var arrow1=(a)=>{
    a
    console.log(a);//10
}
arrow1(10)

var arrow2=(a)=>{
    a
}
console.log(arrow2(10));

/*
Rules of Arrow Function
1.One Param :: optional params braces
2.One Statement :: optional body braces
3.One Statement :: return will be defaulted to one statement
*/

var arrow3=a=>`statement`
console.log(arrow3(5));

//          
var arrow4 = a=>a()

//function params pass
arrow4(function a() {
    console.log(`hello`);
    console.log(`world`);
})
































































