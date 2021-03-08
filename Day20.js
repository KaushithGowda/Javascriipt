//Changing content in html page ::

//Approach1
/// var a = document.getElementsByClassName(`h2`)[0].innerHTML
/// document.getElementById(`h1`).innerHTML = a

//Approach2
// document.getElementById(`h1`).innerHTML = document.getElementsByClassName(`h2`)[0].innerHTML

// var para = document.getElementsByTagName(`p`) //Array Of P tags
// // document.write(para.length)
// para[0].innerHTML = `Paragraph1`
// para[1].innerHTML = `Paragraph2`
// para[2].innerHTML = `Paragraph3`

// //Printing the html content in log 
// for (let index = 0; index < para.length; index++) {
//     console.log(`${para[index].innerHTML}`);
// }

// //Changing the attributes from inline css
// document.getElementById(`heading`).align = `right`
// document.getElementById(`heading`).innerHTML = `I am right`

//Changing the external css
// document.getElementById(`heading`).style = `color:blue`

// //Changing the attributes from internal css
// document.getElementById(`heading`).style.color = `red`

// //Changing the image
// document.getElementById(`car`).src = `nature.webp`

//on-click writing on document
//any type of function can used
// function submit() {
//     document.getElementById(`submitAction`).innerHTML = `Submitted Successfully`
// }

/**wrong

// var x = function () {
//     document.getElementById(`submitAction`).innerHTML = `Submitted Successfully`
// }

// var y = submit => document.getElementById(`submitAction`).innerHTML = `Submitted Successfully`

*/

var a = Number(document.getElementById(`groom`).innerHTML)
var b = Number(document.getElementById(`bride`).innerHTML)

function condition(a,b) {
    document.getElementById(`validAction`).innerHTML = ((a >= 21 && a<80) && (b >= 18 && b<80)) ? `Valid` : `Invalid`
}






























