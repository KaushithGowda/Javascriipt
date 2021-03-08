document.write("Hello World")
console.log("Hello World");
//Uniary nagaitation operator :: Converts String into number and positive values will be converted to negative and negative values will be converted to positive values 
var value = -`-3.5`
console.log(`The value is ${value} and its type is ${typeof value}`);

//Precedency chart
//BODMAS
var result1 = 3 + 4 * 5
console.log(`The value stored in result1 is ${result1} and its type is ${result1}`);

//Exponentiation Operator
var result2 = 4 * 3 ** 2
console.log(`The value stored in result2 is ${result2} and its type is ${result2}`);

//Division Operator
var result3 = 6 / 3 / 2
//         left to right according to Precedency chart
console.log(`The value stored in result3 is ${result3} and its type is ${result3}`);

//Paranthesis :: () 
// Grouping has highest Precedency
var result4 = (2 + 3) + 4 - 2 + (3 + 4)
//              5  + 2 +  7  = 14 // left to right
console.log(`The value stored in result4 is ${result4} and its type is ${result4}`);


var result5 = 5 + 6 - 11 + 8 * 5 + 4
//            11 -11+40 +4 =44 // left to right 
console.log(`The value stored in result5 is ${result5} and its type is ${result5}`);

var result6 = 5 ** 2 + 2 * 3 - 4
//             25 + 6 -4 = 27 // left to right
// var result = 27 
// Assignment operator :: right to left 
//               <------------- 
console.log(`The value stored in result6 is ${result6} and its type is ${result6}`);


var result7 = 1 ** 2 ** 3
//            1** 8 = 1
//        <---------------
// Exponential :: right to left 
console.log(`The value stored in result7 is ${result7} and its type is ${result7}`);

// 3 things which can control flow of programs
// Conditionals :: if,ifelse,switch case
// Loops :: for,do while,while
// Jumps :: break,continue

//if else

// var age = Number(prompt(`Enter your age`))
// var place;
// //braces are optional when we have one statement
// if (age < 18) {
//     place = `Wonderla`
// } else if (age >= 18 && age < 80) {
//     place = `Goa`
// } else {
//     place = `Kashi`
// }
// alert(`As your age is ${age} you can visit ${place}`)

// var sport = prompt(`Choose your favorite sport`);
// switch (sport) {
//     case `Football`:
//         alert(`Play Football`)
//         break;
//     case `Cricket`:
//         alert(`Play Cricket`)
//         break;
//     default:
//         alert(`Watch Netflix`)
//         break;
// }

//switch
// var option = Number(prompt(`Choose your a number`));
// switch (option) {
//     case 1:
//         alert(`Play Football`)
//         break;
//     case 2:
//         alert(`Play Cricket`)
//         break;
//     default:
//         alert(`Netflix`)
//         break;
// }

//loops

//while
var value = 0  
while (value <= 5){
    console.log(value);
    value++
}

//do while loop
var value = 0
do{
    console.log(value);
    value++
} while (value <= 5 );

var a = `What's Up`
document.write(`<br>${a}`)

// for loop
for (let index = 0; index < 5; index++) { //initilization //termination //incrementation(updation)
    console.log(`Hello`);
    console.log(7);
    document.write(`<br>Hello`)
}

// Jumps
for (let index = 0; index < 5; index++) {
    document.write(`Hey`)
    // break;
    // break :: breaks out of loop
    continue;
    // continue  :: ignores the code below it
    document.write(`ignored by continue`)
}

var a,b;
//label for for loop
outerloop:
for (var a = 0; a < 3; a++) {
    var b=0 
    while (b < 3) {
        if (a ==1 && b ==1) {
            continue outerloop
        }
        console.log(`a= ${a} and b= ${b}`);
        b++
    }
}
































