console.log(`Hello World`);

// Creation of Object using constructor function

function Marriage(bride,groom,nationality) {
    this.bride = bride
    this.groom = groom
}

//prototype :: to use the memory efficiently. As when we create same property in the no of objects memory wastage occurs to avoid that we can write those properties in the proto of Marriage. So, in proto type only once property will be created and hence memory is saved.

Marriage.prototype.nationality = `India`
Marriage.prototype.eligible = function () {
    console.log(`They are eligible for marriage as the age of groom>21 and bride>18`);
}
var couple = new Marriage(`anushka`,`virat`,`India`)
console.log(couple);

var couple2 = new Marriage(`milana`,`krishna`,`India`)
console.log(couple2);

//Note :: Every constructor will have a proto type property and all proto type property extends object constructor.

/** Hiearchy
 *          Object
 *            ^
 *            |
 *            |
 *  User defined Constructor(Marriage)
 *            ^
 *            |
 *            |
 *         Instances(Couple1 and Couple2)
 *    
*/

// Accesing the prototype of the constructor
console.log(couple.nationality);
console.log(couple.eligible());// method not returning anything so undefined

//Overiding a property
couple.nationality = `Australia`
console.log(couple.nationality);

//Overiding a method
couple.eligible = function () {
    console.log(`couple method overidden`);
}
console.log(couple.eligible());

console.log(couple2.hasOwnProperty(`nationality`));//present in prototype
console.log(couple2.hasOwnProperty(`bride`));//present in couple2 object

// hasOwnProperty() :: present in object constructor
// prototype chaining :: searches for method in this order :: 
// instances ----> proto of constructor ----> object constructor

//Adding a property in the Object Constructor
Object.prototype.fruit = `apple`

class Cricketer {
    constructor(name,age){
        this.name = name
        this.age = age
        //1.First way of creating a method
        this.player = function () {
            console.log(`${this.name} is god of cricket`);
        }
    }
    //2.Second way of creating a method
    era(){
        console.log(`${this.name} era is an era to remember`);
    }
}

var sachin = new Cricketer(`sachin`,47)
console.log(sachin);
sachin.player();
sachin.era();







































