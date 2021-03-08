//Validation for Name

document.getElementById(`name`).addEventListener(`keyup`, function () {
    var name = document.getElementById(`name`).value
    var Validation = /^([A-Z a-z]){6,}$/ //Minimum 6 character to infinity
    if (Validation.test(name)) {
        document.getElementById(`name`).style.border = `5px solid green`
        document.getElementById('paraName').innerHTML = `Vaild UserName`
    } else {
        document.getElementById(`name`).style.border = `5px solid red`
        document.getElementById('paraName').innerHTML = `In-Vaild UserName`
    }
})

//Validation for Contact Number

document.getElementById(`con_num`).addEventListener(`keyup`, function () {
    var conNum = document.getElementById(`con_num`).value
    // var exp=/^[6-9][0-9]{9}$/
    var exp1 = /^[6-9][\d]{9}$/ //inbuilt character match i.e \d :: any digit character
    if (exp1.test(conNum)) {
        document.getElementById(`con_num`).style.border = `solid 3px green`
        document.getElementById(`paraContact`).innerHTML = `Valid contact Number`
    } else {
        document.getElementById(`con_num`).style.border = `solid 3px red`
        document.getElementById(`paraContact`).innerHTML = `In-Valid contact Number`
    }
})

//Validation for mail ID

//  1       2        3       4
// xyz  @  gmail  . com  / .co
//      m         m      m::mandatory

//1 :: Uppercase,Lowercase,lettters,numbers,-,.,_

//2 :: Lowercase,letters

//3 :: Lowercase,letters(2,5)

document.getElementById(`email`).addEventListener(`keyup`, function () {
    var eMail = document.getElementById(`email`).value
    var exp2 = /^([^#@*\.])([A-Z a-z 0-9 - _ \.]+)@([a-z]+)\.([a-z]{2,5})([\. a-z]{2,5})?$/
    if (exp2.test(eMail)) {
        document.getElementById(`email`).style.border = `solid 3px green`
        document.getElementById(`paraMail`).innerHTML = `Valid email Number`
    } else {
        document.getElementById(`email`).style.border = `solid 3px red`
        document.getElementById(`paraMail`).innerHTML = `In-Valid email Number`
    }
})

//Validation for password
/**
 * 1 Lowercase
 * 1 Uppercase
 * 1 Number
 * 1 Special Character
 * atleast 8 character
 */

document.getElementById(`password`).addEventListener(`keyup`, function () {
    var password = document.getElementById(`password`).value
    //Assertion ?=* defines atleast a single character
    var exp3 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=*[@#$*&_])[A-Z a-z 0-9@$*&_#]{8,12}$/ //Error to be rectified
    if (exp3.test(password)) {
        document.getElementById(`password`).style.border = `solid 3px green`
        document.getElementById(`ppassword`).innerHTML = `Valid password Number`
    } else {
        document.getElementById(`password`).style.border = `solid 3px red`
        document.getElementById(`ppassword`).innerHTML = `In-Valid password Number`
    }
})














