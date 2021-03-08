console.log(`Hello World`);
//Assigning a default value to a parameter PS:: Do not pass value to defaulted value 
AadharCard = function (name,dob,country=`India`){
    this.aadharName = name
    this.aadharDob = dob
    this.myCountry = country
}

var sachin = new AadharCard(`sachin`,`24-04-1970`)
console.log(sachin);

var kohli = new AadharCard(`kohli`,`18-08-1988`)
console.log(kohli);

//Can pass a parameter and also change the default value to a particular object
var dhoni = new AadharCard(`dhoni`,`07-06-1985`,`Australia`)
console.log(dhoni);

kohli = {
    name : `virat`,
    age : 32,
    wife : `sharma`,
    state : function(name,state){
        console.log(`${name} is from ${state}`);
    }
}

console.log(kohli);

Ronaldo = {
    name : `cristiano`,
    age : 38,
    wife : `model`
}

console.log(Ronaldo);

kohli.state(`kohli`,`delhi`)

//Using method present inside a different object in different object using call method
kohli.state.call(Ronaldo,`cristiano`,`porto`)  

//Note :: call method is only for method we cannot use it on properties

//Using Array as parameters using apply
kohli.state.call(Ronaldo,[`cristiano`,`porto`])// both parameters are taken as name

//apply :: apply method applies parameters to all params
kohli.state.apply(Ronaldo,[`cristiano`,`porto`])
 
//Parameters on hold using bind 
//bind :: can be used to pass parameters later
var newRonaldo = kohli.state.bind(Ronaldo,[`cristiano`]) 
newRonaldo(`porto`)

function fan(){
    console.log(`I am fan of lengends`);
}

function model(name) {
    name()//fan
    console.log(`I am supermodel`);
}

model(fan)//callback function

// callback function :: function calling another function within a function 

var oggy = {
    name : `oggyf`,
    networth : `2.4b`
}

//Address is transfered and they are pointing to same object 
//objects are passed by ref not by value
var everydayindia = oggy
console.log(oggy);
console.log(everydayindia);

//property in both object will be changed
everydayindia.networth = `3.6b`
console.log(oggy);
console.log(everydayindia);

































