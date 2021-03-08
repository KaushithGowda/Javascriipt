console.log(`Hello World`);

//Object creation using class expression
Cricketer = class {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    player(){
        console.log(`sachin is god of cricket`);
    }
}

var sachin = new Cricketer(`name`,`47`)
console.log(sachin);//using constructor
sachin.player()//using method

//Class name = parscal case convention
class Shape {
    constructor(length,width){
        this.length = length
        this.width = width
    }
    
    area(){
        return `The length is ${this.length} and the width is ${this.width}`
    }

    //Creation of static method :: No need of object creation
    //Note :: this keyword should not be used in the static methods
    static myMethod(){
        return `The static method`
    }
  
    static height = 20
}

//variable = Camel case convention 
var rectangle = new Shape(10 , 15)
console.log(rectangle);
console.log(rectangle.area());

//Call for static method using class name without creating the object
console.log(Shape.myMethod());
console.log(Shape.height);

bike = class{
    constructor(model,cc){
        this.model = model
        this.cc = cc
        //Note :: When a method is defined in the constructor the method will be present in  re object
        this.specification = function() {
            return `The model ${this.model} and cc ${this.cc}`
        }
    }
    // Note :: When a method is defined outside a constructor the method will be present in proto of class(hiearchy = object<----class<----createdObject) 
    thump(){
        return `re has special thump`
    }

} 
var re = new bike(`classic`,`350`)
console.log(re);

class Human{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    work(){
        console.log(`${this.name} is a hard working person`);
    }

    override(){
        console.log(`override method in parent`);
    }
}

class Actor extends Human{
    
    constructor(name,age,specilization){
        //Executing the constructor present in the parent class using super()
        super(name,age)
        this.specilization = specilization
    }

    //Override method
    override(){
        return `override method in child class`;
    }

    //Specialised method
    specialised(){
        return `specialised method in child class`;
    }

}

var rakshith = new Actor(`Rakshith`,`33`)
console.log(rakshith);
console.log(rakshith.override());
console.log(rakshith.specialised());

var prithiv  = new Actor(`Prithiv`,`45`,`Acting`)
console.log(prithiv);

function addFourNumbers(value1,value2,value3,value4){

    console.log(typeof value1);
    console.log(typeof value2);
    console.log(typeof value3);
    console.log(typeof value4);

    console.log(value1+value2+value3+value4);
}

var arrayValues = [10,20,30,40]

//Rest Operator :: the array data is converted into number using ... 
//Note :: Should be used in function call 
addFourNumbers(...arrayValues)

function addThreeNumbers(...arr) {//Spread Operator
    //Spread Operator :: the number datatype is converted into array data
    //Note :: Should be used in function argument 
    console.log(arr);
    console.log(typeof arr);
}

addThreeNumbers(10,20,30)





























