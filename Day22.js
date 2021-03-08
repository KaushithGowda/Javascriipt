//Regular expression

/**
 *Two Ways of creating regexp
 *1. var reg = /<value>/
 *2. var reg2 = new RegExp
*/

var reg1 = /abc/
console.log(reg1);
console.log(typeof reg1);

var reg2 = new RegExp
console.log(reg2);
console.log(typeof reg2);

//regexp method
//exec(<argument>) :: argument is string returns matched array of string
var reg21 = /abc/
var reg3 = reg21.exec(`abc`)
console.log(reg3);

//test(<argument>) :: argument is string returns boolean
var reg4 = /e00/
var reg5 = reg4.test(`I am e000 expression`)
console.log(reg5);

//String method
var string1 = `Hello ABC`
// var string2 = string1.search(/AB/)//6
// var string2 = string1.search(/lo/)//3
var string2 = string1.search(/oo/)//-1 //when its not present in the string
console.log(string2);//index of starting character  

//String method
//match(<argument>) :: argument is regexp returns matched array of string
var string3 = `rahul dravid`
var string4 = string3.match(/dravid/)
console.log(typeof string4);

//Validation using regexp
// document.getElementById(`name`).addEventListener(`keyup`,function () {
//     var name = document.getElementById(`name`).value
//     var Validation = /KaushithGowda/
//     if (Validation.test(name)) {
//         document.getElementById(`name`).style.border = `5px solid green`
//         document.getElementById('pname').innerHTML = `Vaild UserName`
//     } else {
//         document.getElementById(`name`).style.border = `5px solid red`
//         document.getElementById('pname').innerHTML = `Vaild UserName`
//     }
// })

//Character Array 
document.getElementById(`name`).addEventListener(`keyup`,function () {
    var name = document.getElementById(`name`).value
    // var Validation = /[abc][xyz]KaushithGowda/ //first character can be a or b or c and second character can be x or y or z
    // var Validation = /[a-z][xyz]KaushithGowda/ //first character can be a-z and second character can be xyz
    // var Validation = /[A-Z][xyz]KaushithGowda/
    // var Validation = /^[A-Z a-z][A-Z a-z][A-Z a-z][A-Z a-z][A-Z a-z][A-Z a-z][A-Z a-z]$/ //7 Characters of type a-z and A-Z
    // var Validation = /^([A-Z a-z]){6,8}$/ //Minimum:: 6 to Maximum:: 8
    var Validation = /^([A-Z a-z]){6,}$/ //Minimum 6 character to infinity
    if (Validation.test(name)) {
        document.getElementById(`name`).style.border = `5px solid green`
        document.getElementById('pname').innerHTML = `Vaild UserName`
    } else {
        document.getElementById(`name`).style.border = `5px solid red`
        document.getElementById('pname').innerHTML = `In-Vaild UserName`
    }
})
