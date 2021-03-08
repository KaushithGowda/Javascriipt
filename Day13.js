console.log(`Hello World`);

//Nested object
KTM = {
    model : `rc390`,
    price : 399999,
    handling : `laserSharp`,
    Bajaj : {
        model : `dominor`,
        price : 199999,
        handling : `terrible`
    }
}

console.log(KTM.model);
console.log(KTM.Bajaj.model);//accessing tbe child object

delete KTM
// console.table(KTM); //not defined 

deepika = {
    name :  `deeepika`,
    age : 25,
    spouse : `ranveer`,
    
    //Adding method for an object :: assigning a function to a property is called method
    acting: function(name) {
        console.log(`${name} is a good actress`);
        // this keyword will point to the object through which it is been called
        console.log(this);
    }
}
deepika.acting(`deepika`); 
console.log(deepika);
console.table(deepika)

// this keyword will point to global property 
console.log(this);

/**
 * Different ways of creating objects ::
 * 1.Using Object literal <objectName> = {
 *                                          key1 : value1,
 *                                          key2 : value2
 *                                       }
 * 2.<nameofObject> = Object.create(Object.prototype)
 * //Array,Object,Date :: defined by EICMA script;constructors,Native Objects
 * 3.<nameofObject> ={}
 * 4.<nameofObject> = new Object() // inbuilt constructor object
 * 5.using function
*/

// 1.
elonmusk = Object.create(Object.prototype)
// There are some changes in syntax using this method of object creation and adiition of properties
elonmusk.age = 42
elonmusk.product1 = `tesla`
elonmusk.product2 = `spaceX`
elonmusk.rich = `youthink`
delete elonmusk.age

console.table(elonmusk);

elonmusk[`rich`] = `crazyRich`//updating
elonmusk[`country`] = `Italy`//adding
console.table(elonmusk);

delete elonmusk
// console.table(elonmusk);//object not defined

//2.
elonmusk2 = {}
console.log(elonmusk2)

//3.
var rc390 = new Object();

rc390.capacity = 377.7
rc390.ridingPosition = `supercommitted`
rc390.acceleration = `intense`

console.table(rc390);

rc390.braking = function braking() {
    console.log(this);// pointing to object through which method is being called
    return `strong brakes`
}

console.log(rc390.braking());
 
function name1() {
    console.log(this); // pointing to global object i.e window object
}
name1()

var myArray = new Array()
console.log(myArray);
console.log(typeof myArray);

var today = new Date()
console.log(today);
console.log(typeof today);

console.log(new Date().getFullYear());
console.log(new Date().getTime());

// 4.
function Cricketer(name,age){
    this.cricketerName = name
    this.cricketerAge = age
}

var sachin = new Cricketer(`sachin`,47)
console.table(sachin);
























