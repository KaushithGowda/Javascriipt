//Reduction of code passing funstion as a param
document.getElementById(`add`).addEventListener(`click`, function () {
    var a = Number(document.getElementById(`Value1`).value)
    var b = Number(document.getElementById(`Value2`).value)
    var c = Number(a + b)
    document.getElementById(`output`).innerHTML = `The Addition of ${a} and ${b} is ${c}`;
})
document.getElementById(`sub`).addEventListener(`click`, function () {
    var a = Number(document.getElementById(`Value1`).value)
    var b = Number(document.getElementById(`Value2`).value)
    var c = a - b;
    document.getElementById(`output`).innerHTML = `The Subtraction of ${a} and ${b} is ${c}`;
})
document.getElementById(`mul`).addEventListener(`click`, function () {
    var a = Number(document.getElementById(`Value1`).value)
    var b = Number(document.getElementById(`Value2`).value)
    var c = a * b;
    document.getElementById(`output`).innerHTML = `The Multiplication of ${a} and ${b} is ${c}`;
}
)
document.getElementById(`div`).addEventListener(`click`, function () {
    var a = Number(document.getElementById(`Value1`).value)
    var b = Number(document.getElementById(`Value2`).value)
    var c = a / b;
    document.getElementById(`output`).innerHTML = `The Division of ${a} and ${b} is ${c}`;
})

//Changing the font family
document.getElementById(`para`).addEventListener(`click`, function () {
    document.getElementById(`para`).style = `font-family : monospace`
})

//Changing the image size
document.getElementById(`image`).addEventListener(`click`, function () {
    document.getElementById(`image`).style = `width : 100px`
})



















































