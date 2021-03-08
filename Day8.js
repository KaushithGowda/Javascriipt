
//Arrays :: Collection of homogeneous and heterogeneous data stored as object

//displayed as an object
var cricketer =[`Rahul`, `Sachin`, `Pujara`, `Kohli`]
//displayed as string
console.log(`The data of cricketer is ${cricketer} and its type is ${typeof cricketer}`);

//displayed as an array
console.log(cricketer);

console.log(cricketer[0]);//data at 0th index
console.log(cricketer[2]);
console.log(cricketer[-1]);//undefined

var godOfCricket = [`Sachin`,45,true]
console.log(godOfCricket);//hetergenoues data can be used in array

//modifying data
godOfCricket[2] = false
console.log(godOfCricket);

godOfCricket[20] = `Batsmen`//will be put at 20th index leaving behind 17 empty spaces
console.log(godOfCricket);

//arrays are mutable i.e whenever we make changes in the array changes happen in the same array

console.log(godOfCricket[15]);//empty spaces in array //undefined

var actress = new Array(`Kiara Advani`,`Ashika Ranganath`,`Samantha`)
console.log(actress);

//length of Array
console.log(actress.length);//property hence no braces

// console.log(actress[0]);
// console.log(actress[2]);
// console.log(actress[1]);

//for loop for fetching the actress Array
for (let index = 0; index < actress.length; index++) {
   
    console.log(actress[index]);
}

//forof loop for fetching the actress Array //values
//actress[element] ---> key[value]
//forof loop is used to obtain value
//iterateable object :: traverseable objects 
for (let element of actress) {
    console.log(element);
}

//forin loop for fetching the actress Array //key
//forin loop is used to obtain key
for (let element in actress) {
    console.log(element);
}

var places = new Array('34')//34 :: String Data
var places = new Array(34,5)//34 :: Number Data
var places = new Array(34)//34 :: size
console.log(places);//34
console.log(places.length);//34
places[40]=`Goa`
console.log(places);

var Array1 = [34]
console.log(Array1);
console.log(Array1.length);

var rcb = [`abd`, `chahal`, `josh`, `padikal`, `sundar`]

console.log(rcb);
//pop() :: deleting data at rear end
rcb.pop();
console.log(rcb);//deleted sundar

//push(<params>) :: inserting data at rear end
rcb.push(`siraj`);
console.log(rcb);//added siraj

//unshift(<params>) :: inserting data at front end 
rcb.unshift(`kohli`);
console.log(rcb);//added kohli

//shift() :: deleting data at front end 
rcb.shift();
console.log(rcb);//deleted kohli 

var age = [45, 10, 50, 23, 28]
console.log(age);

//sort() :: sorting the data in ascending order
age.sort()
console.log(age);

//reverse() :: reversing the order of Array 
age.reverse()
console.log(age);

//indexOf() :: returns index of a data
console.log(age.indexOf(23)); //3
console.log(age.indexOf(200)); //-1 data is not present in the Array So it returns -1

// slice(<start index>,<end index>) :: gives out new object of selected data(end index is exclusive)
//There is no changes in the original array
var random = [false,21,11,85,10]
//             0(-4)     1(-3)    2(-2)       3(-1)
console.log(random);
//using index
console.log(random.slice(-1));//10
console.log(random.slice(1, 3));  //21 11 //85--->exculsive
console.log(random);//No changes in the original array

 


























