console.log("Hello World");

//IIFE(Immediate Invoke Function Expression) function (Implicit function call) :: Function inside paranthesis 
/* printing this whole function below 
(function () {
    console.log(`Dravid`);
    console.log(`Sehwag`);
    return `Sachin`
})()
*/
//IIFE Function
console.log((function () {
    console.log(`Dravid`);
    console.log(`Sehwag`);
    return `Sachin`
})());

/*
IIFE General syntax ::
(function <name>(<params>) {
    
})()
*/
function random() {
    console.log(`I am random function`);
}

console.log(`extra statement before random function call`);

random() //call to random function after a statement

//--------------------------------------------------------------
//Recursive Function :: recuring 
/*
var i = 0
function sample() {
    console.log(i++);//0
    sample()
}

sample()
*/

//--------------------------------------------------------------
/* Array created by inputs of user
var size = Number(prompt('Enter the size of array'))
var myArray = new Array(size)
for (let index = 0; index < myArray.length; index++) {
    myArray[index]=prompt('Enter the elements of array')
}
alert(`The array elements are ${myArray}`)
console.log(`The array elements are ${myArray}`);
*/

//--------------------------------------------------------------
/* Displaying the Positive elements of array
var size = Number(prompt('Enter the size of array'))
var myArray = new Array(size)
for (let index = 0; index < myArray.length; index++) {
    myArray[index]=Number(prompt('Enter the elements of array'))
}
alert(`The array elements are ${myArray}`)
console.log(`The array elements are ${myArray}`);

displayPositiveArrayElements(myArray)

function displayPositiveArrayElements(array){
    var modifiedArray=[]
    array.forEach(element => {
        if(element>=0){
            modifiedArray.push(element)
        }
    });
    alert(`The positive elments of array are ${modifiedArray}`)
    console.log(`The positive elments of array are ${modifiedArray}`)
}
*/

//--------------------------------------------------------------
/* Displaying the Negative elements of array
var size = Number(prompt('Enter the size of array'))
var myArray = new Array(size)
for (let index = 0; index < myArray.length; index++) {
    myArray[index]=Number(prompt('Enter the elements of array'))
}
alert(`The array elements are ${myArray}`)
console.log(`The array elements are ${myArray}`);

displayPositiveArrayElements(myArray)

function displayPositiveArrayElements(array){
    var modifiedArray=[]
    array.forEach(element => {
        if(element<0){
            modifiedArray.push(element)
        }
    });
    alert(`The positive elments of array are ${modifiedArray}`)
    console.log(`The positive elments of array are ${modifiedArray}`)
}
*/

//--------------------------------------------------------------
/* Replacing spaces with special character
var text = prompt(`Enter any text`)
var array = text.split(` `)
if (true) {
    for (let index = 0; index < array.length; index++) {
        newText=text.replaceAll(` `,`**`)
        console.log(newText);
    }
} else {
    console.log(`no spaces present to replace`);
}
*/

//--------------------------------------------------------------
/* Replacing spaces with special character using function join
var text = prompt(`Enter any text`)
var array = text.split(` `)
joinArray(array)

function joinArray(array){
    var newText = array.join(`@`)
    console.log(newText);
}
*/

//---------------------------------------------------------------
/* Displaying the even elements of array
var size = Number(prompt('Enter the size of array'))
var myArray = new Array(size)
for (let index = 0; index < myArray.length; index++) {
    myArray[index]=Number(prompt('Enter the elements of array'))
}
alert(`The array elements are ${myArray}`)
console.log(`The array elements are ${myArray}`);

displayPositiveArrayElements(myArray)

function displayPositiveArrayElements(array){
    var modifiedArray=[]
    array.forEach(element => {
        if(element%2===0){
            modifiedArray.push(element)
        }
    });
    alert(`The even elments of array are ${modifiedArray}`)
    console.log(`The even elments of array are ${modifiedArray}`)
}
*/
//---------------------------------------------------------------
//filter(<paramas>){<condition>} :: returns true or false 
myArray = [2,10,11,14,15,8,4,6]
var evenArray = myArray.filter(element=>element%2===0)
console.log(evenArray);
//---------------------------------------------------------------

//Filtering the characters using length
myArray = [`Cristiano Ronaldo`,`Virat Kohli`,`Messi`]
var evenArray = myArray.filter(element=>element.length>=7)
console.log(evenArray);

//map method :: to make arithmetic operations on elements of an array 
var modifiedArray=[7,10,11,18,22,21,77]
var newArray=modifiedArray.map(element=>element*2)
console.log(newArray);

var whatDoYouDo = function(education,Name){
    switch(education){
        case `BE`:
            return `${Name} is an Engineer`
            break; // unreachable because of return keyword
        case `Doctor`:
            return `${Name} is an Doctor`
            break;
        case `Police`:
            return `${Name} is an Police`
            break;
        default:
            return `${Name} is an Unempolyed`
            break;
    }
}

console.log(whatDoYouDo(`BE`,`Kaushith Gowda`));































