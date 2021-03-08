console.log(`Hello World`);

console.log(window);
console.log(document);

//Accessing the elements ::
// getElementById :: Element with ids because it will have unique element
// var res1 = document.getElementById('para1')
// console.log(res1);
// document.write(res1.innerHTML);

// getElementsByClassName :: Elements with class and tags because it will have many element with same class name
// var res2 = document.getElementsByClassName("heading1")
// console.log(res2);
// document.write(res2[0].innerHTML);
// document.write(res2[1].innerHTML);

// var res3 = document.getElementsByTagName(`h1`)
// console.log(res3);
// document.write(res3[0].innerHTML);

// querySelector :: Elements with ids because it will have unique element
// var selector1 = document.querySelector(`#para1`)
// document.write(selector1)
// document.write(selector1.innerHTML)

// querySelectorAll :: Elements with class and tags because it will have many element with same class name
// var selector2 = document.querySelectorAll(`.heading1`)
// console.log(selector2)
// document.write(selector2[0].innerHTML)

//Modifying the elements ::
// document.getElementById(`para1`).innerHTML = `This is updated paragraph`

// var res4 = document.getElementsByClassName(`heading1`)
// res4[1].innerHTML = `This is updated heading at 1`
// res4[0].innerHTML = `This is updated heading at 0`

// document.getElementsByClassName(`heading1`)[1].innerHTML = `This is updated value using class name coded in single line`

// var res5 = document.getElementsByTagName(`h1`)
// res5[0].innerHTML = `This is updated heading using TagName at 0`

// var res6 = document.querySelector(`#para1`)
// res6.innerHTML = `This is updated paragraph using query selector`

// var res7 = document.querySelectorAll(`.heading1`)
// res7[0].innerHTML = `This is updated heading using query selectorAll`





















