//Checking the browser support for js methods :: Internet explorer old version will not support some methods of js Hence we should use jQuery
// document.getElementById(`btn`).addEventListener(`click`,function () {
//     document.getElementById(`para`).innerHTML = `You clicked the buttton`
// })

//Expanded code::
jQuery(document).ready(function () {
    jQuery(`#btn`).click(function () {
        jQuery(`#para`).html(`You have clicked a first button`)
    })
})

//Using $ instead of jQuery ::
/**
 *$(document).ready(function () {
 *   $(`#btn`).click(function () {
 *    $(`#para`).html(`You have clicked a first button`)       
 *   })
 *})
*/
//(Document).ready is optional
/**
 *$(function () {
 *   $(`#btn`).click(function () {
 *    $(`#para`).html(`You have clicked a first button`)       
 *   })
 *})
*/

//7 Selectors :: We can access and manupulate the html content
/**
 * 1.TagName
 * 2.Class
 * 3.Id
 * 4.Form
 * 5.Attribute Name selector
 * 6.Attribute Value selector
 * 7.All Selector
*/

//Using ID
$(document).ready(function () {
    $(`#btn2`).click(function () {
        $(`#para2`).html(`You have clicked a second button`)
    })
})

//Using TagName







//Using Combinators 
$(document).ready(function () {
    $(`div p`).click(function () {
        $(`h1`).css(`background-color`, `yellow`)
    })
})

//Using Class Name
// $(function () {
//     $(`#btn3`).click(function () {
//         $(`.table1,.td`).css(`border`,`1px solid black`)
//         $(`.table1,.td`).css(`border-collapse`,`collapse`)
//         $(`.td,.td12`).css(`background-color`,`Grey`)
//         //Adding all css property at a time  /-----------------------------------doubt
//         // $(`.table1`).css({`border`:`1px solid black`,`border-collapse`:`collapse`})
//     })
// })

//Using Attribute Name
// $(function () {
//     $(`button[class]`).click(function () {
//         $(`table[class],td[class]`).css(`border`, `1px solid black`)
//         $(`table[class],td[class]`).css(`border-collapse`, `collapse`)
//         $(`td[class]`).css(`background-color`, `Grey`)
//     })
// })

//Using Attribute Value
// $(function () {
//     $(`button[class = buttonClass]`).click(function () {
//         $(`table[class=table2],td[class=td2]`).css(`border`,`1px solid black`)
//         $(`table[class=table2],td[class=td2]`).css(`border-collapse`, `collapse`)
//         $(`td[class=td2]`).css(`background-color`, `Grey`)
//     })
// })





































