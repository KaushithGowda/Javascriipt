console.log(`Hello World`);

function volume(length) {
    return function (width) {
        return function (height) {
            console.log(length * width * height);
        }
    }
}

/** function calls again and again
 *volume2 = volume(10)
 *console.log(volume2);
 *volume3 = volume2(20)
 *console.log(volume3);
 *volume3(20); 
*/

//Carring :: technique of transforming function with multiple arguments with same name into a single statement 
volume(10)(20)(30)

/**
 *Note :: Use of anonymous function
 * 1.Can be passed as a parameter to another function
 * 2.Can be used in creating a function expression
 * 3.Can be used in use ifey function
*/

//Asynchronous code

var f1 = () => `I am f1`;
var f2 = async () => {
    new Promise((resolve, reject) => {
        setTimeout(function () {
            return `I am f2`
        }, 3000)
    })
}
var f3 = () => `I am f3`;

var functionOne = f1()
console.log(functionOne);
var functionTwo = f2()
console.log(functionTwo);
var functionThree = f3()
console.log(functionThree);

// Promise
var myPromise = new Promise(function (resolve, reject) {
    var value = false
    if (value) {
        resolve(`Resolved`)
    } else {
        reject(`Reject`)
    }
})

//Executes then when resolve is present i.e when promise is fulfilled
myPromise.then(function (a) {
    console.log(`I am ${a}`);
}).catch(function(b){
    //Executes catch i.e when promise is not fulfilled 
    //handling error
    console.log(`I am ${b}`);
})
















































