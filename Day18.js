console.log(`Hello World`);

// ----------------------------------------------------------
//Synchronous Code::
var a = 10
console.log(a);
myfunction()//control entered function
var b = 2//this statement is waiting for control from function
console.log(b);

function myfunction() {
    console.log(`Hi I am myfunction`);
}

// ----------------------------------------------------------
//Asynchronous code ::
var a = 10
console.log(a);

//setTimeout(<functionnam>,<timedelay>) :: inbuilt function which will take a function as param and it will callback myfunction

// setTimeout(myfunction,5000)//time delayed to execute
var b = 2//control entered without executing myfunction
console.log(b);

function myfunction() {
    console.log(`Hi I am myfunction`);
}

//using function inside instead of function name
setTimeout(function myfunction(a, b) {
    console.log(`Hi I am myfunction and values are ${a} and ${b}`);
}, 1000, `<value1>`, `<value2>`)//params like a and b can be used next to timedelay

/**
 *Promise :: It is an inbuilt constructor Links producing code and consuming code
 * Promise has two properties
 * 1.states :: 
 *      pending :: undefined 
 *      fulffilled :: fulfilled object
 *      unfulfilled :: error object
 * 2.
*/

var myPromise = new Promise(function (resolve, reject)
//Producing code
{
    resolve(`resolved value`)// fulfilled object
})

//Consuming code :: executes when promise is resolved
myPromise.then(function (res) { //res or anything will be attached when executing it will be called and executed
    console.log(res);
}).catch(function (rej) {//error to be handled when promise returns reject
    console.log(`promise has returned ${rej}`);
})

//Syntax error :: Interpretation of code
//Runtime error(Exceptions) :: During Execution of code

//Case1::
try {
    console.log(somefunction());
} catch (error) {
    console.log(`somefunction is not declared`);
} finally {
    console.log(`This is finally block`);
}

console.log(10);

//Case2::
try {
    console.log(`This is explicit try block`);
    throw somefunction()
} catch (e) {
    console.log(e);
} finally {
    console.log(`This is finally block`);
}

//Case3::
try {
    throw somefunction()
    console.log(`This is explicit try block`);//ignored :: lines below throw keyword
} catch (e) {
    console.log(e);
} finally {
    console.log(`This is finally block`);
}

//Math Object ::
//------------------------------------------------------------ 
//Properties ::
console.log(Math.PI);//PI = complete pi value
console.log(Math.E);//Eulers constants
console.log(Math.SQRT2);//Sqrt of 2
console.log(Math.SQRT1_2);//Sqrt of something
console.log(Math.LN2);//Natural log of 2
console.log(Math.LN10);//Natural log of 2
console.log(Math.LOG10E);//Base 10 logrithm of E
console.log(Math.LOG2E);//Base 2 logrithm of E

//------------------------------------------------------------ 
//methods ::
console.log(Math.round(4.4));
console.log(Math.round(4.6));
console.log(Math.pow(5, 2));
console.log(Math.pow(5, 1));
console.log(Math.pow(18, 6));
console.log(Math.sqrt(25));
console.log(Math.sqrt(100));
console.log(Math.sqrt(150));
console.log(Math.abs(-4.6));
console.log(Math.ceil(4.4));//5 returns highest value from fraction value
console.log(Math.floor(4.9));//4 returns smallest value from fraction value
console.log(Math.min(100,20,50,60));
console.log(Math.random());//random value generated
console.log(Math.random()*10);//random value generated

// var value = Math.round(false)
var value = Math.round(4.4)
console.log(value);
console.log(typeof value);

value2 = `ABC`
var res = value2.charCodeAt(1)
console.log(res);










