var college="East West"
console.log("Value present in the college is:: " + college);
// Wrapping(done by js engine) :: The process of converting datatypes into object 
console.log("Type of college "+typeof college);

// charAt :: return character at particular index
console.log(college.charAt(10));
console.log(college.charAt(5));
console.log(college.charAt(4));//space

//concat method
var string1 = "Hello"
var string2 = "000"
var string3 = "there"
var string4 = " "
var string5 = "People"
//can use same variable multiple times
console.log(string1.concat(string2,string3,string4,string5,string4,string5));

let actor1="Nadaprabhu Kempe Gowda"
console.log(actor1);
//.toUpperCase() ::(wrapping concept) to convert it to Uppercase
var ActorName1=actor1.toUpperCase()
console.log("UpperCase "+ActorName1);
//.toLowerCase() ::(wrapping concept) to convert it to Lowercase
var ActorName2=actor1.toLowerCase()
console.log("LowerCase "+ActorName2);

let actor2="         Nadaprabhu Kempe Gowda"
document.write(actor2)//ignores spaces by default 
document.write(actor2.trim())//no change
console.log(actor2);//spaces included
console.log(actor2.trim());//trimmed output

var Date1="08/01/2021"
//split("<character>") :: split the main string into substrings at specified characters 
//Output :: array of Strings
var newDate1=Date1.split("/")
console.log(newDate1);

// length property :: to check length of String
var lengthDate1 = Date1.length
console.log(lengthDate1);

var Actress1 = "Kiara Advani"
console.log(Actress1);
//replace :: replacing the string character
//var newActress1 = actress.replace(searchvalue,replacevalue)
var newActress1 = Actress1.replace("Advani","Malotra")
console.log(newActress1);

//`` :: template literal
var RichestDude = `Elon Musk`
console.log("The RichestDude on this world "+ RichestDude);
console.log("The typeof RichestDude on this world "+typeof RichestDude);

// advantage of template iteral :: multiple line string literal is possible
var job1 = `Athelete,
fun,
passion,
fame,
money,
happiness`
console.log(job1);

//Multiple line String is not possible in "" and ''
/*var job2 = "Athelete,
fun,
passion,
fame,
money,
happiness"*/
/*var job3 = 'Athelete,
fun,
passion,
fame,
money,
happiness'*/

var athelete = "Ronaldo"
var age = 42
var isHeBeast = true
console.log("Idol by name "+ athelete + " of age " + age + " and if you ask anyone is he a beast? " + isHeBeast + "!" + " :: Double qutoes method ");

//String interpolaration ${} :: we can use different datatypes in a single line 
console.log(`Idol by name ${athelete} of age ${age} and if you ask anyone is he a beast?${isHeBeast} !  :: Template Literal Method`) 

//to escape Character 
// console.log("I am Tired" and sleep");//error
console.log("I am Tired\" and sleepy    ");

var number1 = 10//number
console.log(`the value of number1 is ${number1}`)
console.log(`the typeof number1 ${typeof number1}`)

var number2 = 1/0//infinity
console.log(`the value of number2 is ${number2}`)
console.log(`the typeof number2 ${typeof number2}`)

var number3 = 0/0//NaN
console.log(`the value of number3 is ${number3}`)
console.log(`the typeof number3 ${typeof number3}`)

//.toFixed() :: rounds the decimal value to any particular value
var Average = 35.615451
console.log(`The Average value is ${Average.toFixed()}`);
console.log(`The Average value to 2 places is ${Average.toFixed(2)}`);

//.toPrecision :: whole value
console.log(`The Average value to 4 precisions is ${Average.toPrecision(5)}`);

var Redline = 70000
var RedlineKTM1 = Redline.toString()
var RedlineKTM2 = Redline.toString(2)//binary 
var RedlineKTM3 = Redline.toString(8)//octal
var RedlineKTM4 = Redline.toString(16)//hexadecimal
console.log(`The Redline of KTM1 is ${RedlineKTM1} and type of Redline of KTM1 ${typeof RedlineKTM1}`);
console.log(`The Redline of KTM2 is ${RedlineKTM2} and type of Redline of KTM2 ${typeof RedlineKTM2}`);
console.log(`The Redline of KTM3 is ${RedlineKTM3} and type of Redline of KTM3 ${typeof RedlineKTM3}`);
console.log(`The Redline of KTM4 is ${RedlineKTM4} and type of Redline of KTM4 ${typeof RedlineKTM4}`);

