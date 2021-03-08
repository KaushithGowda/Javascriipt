console.log(`Hello World`);

value1 = "Dhoni"
//window :: object type and value will be saved as variable value 
// console.log(window.value1);
// console.log(value1===window.value1);

function value2() {
    var value1 = `Kohli`
    console.log(value1);//Kohli
    // this.<value> :: to access global variable inside function or anywhere when there is same name variable inside a function
    // window.<value> :: to access global variable inside function or anywhere  when there is same name variable inside a function
    // console.log(this.value1);//Dhoni 
}

console.log(value1);//Dhoni
value2()

/**
 * Objects ::
 * 1.Native object :: Examples :: Array,Date
 * 2.Hoist object :: Examples :: window,node object
 * 3.User defined object ::
*/

// 1.Native object 

// 1.Array
var actor = new Array()
console.log(actor);
// var actress = [] not an object;Array is an object when new Array() is used

// 2.Date
var todayDate = new Date()
console.log(todayDate);
//-------------------------------------------------------------------------------

/**
 * Creation of object
*/

/**Synatax of object ::
 * var object1= {
 *               proptery1: `value1`,
 *               proptery2: `value2`
 *          }
 * proptery(key):value(value)  :: Property and value will be saved in key:value pair
*/

sports = {
    Football: `ball`,
    Cricket : `bat and ball`,
    Racing : `bike`
}

console.log(sports);

//Dot method :: fetching the properties present in the object using dot
console.log(sports.Football);

//Square bracket :: fetching the properties present in the object using Square bracket
console.log(sports[`Cricket`]);

//Modifying the object property using dot method
sports.Cricket = `pads`
console.log(sports);

//Modifying the object property using square bracket method
sports[`Cricket`] = `helmet`
console.log(sports);

//Addition of property to object
sports.Gaming = `pubg`
console.log(sports);

//Addition of property to object
sports[`Basketball`] = `basket`
console.log(sports);

// deleting a property
delete sports.Cricket
console.log(sports);

// deleting a property
delete sports[`Football`]
console.log(sports);

/**
 * 3 ways of deleting a property
 * 1.strict inequality
 * 2.strict equality
 * 3.in keyword
 * 4.hasOwnProperty(`<propertyname>`) keyword
*/

//Checking wheather property is present in the array using strict inequality
console.log((sports.Cricket !== undefined));//false :: not present
console.log((sports.Basketball !== undefined));//true :: present

//Checking wheather property is present in the array using strict equality
console.log((sports.Football == undefined));//true :: not present
console.log((sports.Basketball == undefined));//false :: present

console.log(sports);

//Checking wheather property is present in the array using `in` keyword
console.log(`Football` in sports);//false
console.log(`Basketball` in sports);//true

//Checking wheather property is present in the array using `.hasOwnProperty(`<propertyname>`)` keyword
console.log(sports.hasOwnProperty(`Football`));//false
console.log(sports.hasOwnProperty(`Basketball`));//true































