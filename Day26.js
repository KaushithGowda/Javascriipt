$(document).ready(function () {
    $(`#button`).click(function () {
        $(`*`).css({ "background-color": "yellow" })
    })
})
// can u hear me
//Form selector `:`
// $(document).ready(function () {
//     $(`#button2`).click(function () {
//         $(`:input`).css({"background-color":`yellow`})
//     })
// })

//Form selector `:`
$(document).ready(function () {
    $(`#button2`).click(function () {
        $(`:disabled`).css({ "background-color": `yellow` })
    })
})

// $(document).ready(function () {
//     $(`#button4`).click(function () {
//         $(`#heading`).html(`new content`)
//         $(`#heading`).css({"color":`red`,"background-color":`black`})
//     })
// })

//jQuery Chaining
// $(document).ready(function () {
//     $(`#button4`).click(function () {
//         $(`#heading`).html(`new content`).css({"color":`red`,"background-color":`black`})
//     })
// })

$(document).ready(function () {
    $(`#button4`).click(function () {
        $(`#heading`).html(`new content`).css({ "color": `red`, "background-color": `black` })
    })
})

//Events::
$(document).ready(function () {
    //1.click
    $(`#button5`).click(function () {
        $(`#heading2`).html(`You have clicked`)
    })
    //2.doubleclick
    $(`#button6`).dblclick(function () {
        $(`#heading2`).html(`You have double clicked`)
    })
    // 3.Mouse enter
    $(`#button7`).mouseenter(function () {
        $(`#heading2`).html(`Mouse entered`)
    })
    // 4.Mouse leave
    $(`#button8`).mouseleave(function () {
        $(`#heading2`).html(`Mouse left`)
    })
    // 5.Hover
    $(`#button9`).hover(function () {
        $(`#heading2`).html(`hovering content`).css(`background-color`, `yellow`, `color`, `red`)
    })
    //example for hover
    $(`#example`).hover(function () {
        $(`#example`).css(`background-color`, `yellow`, `color`, `red`)
    })
})

//EVENTS::
// order of events  key down ----> key press ----> key up
// $(function () {
//     //KeyUP
//     $(`#key_up`).keyup(function () {
//         $(`h5`).html(`key up`)
//     })
//     //KeyPress
//     $(`#key_press`).keypress(function () {
//         $(`h5`).html(`key press`)
//     })
//     //KeyDOWN
//     $(`#key_down`).keydown(function () {
//         $(`h5`).html(`key down`)
//     })
// })
$(function () {
    //KeyUP
    $(`#form`).keyup(function () {
        $(`h5`).html(`key up`)
    })
    //KeyPress
    $(`#form`).keypress(function () {
        $(`h5`).html(`key press`)
    })
    //KeyDOWN
    $(`#form`).keydown(function () {
        $(`h5`).html(`key down`).css(`background-color`,`yellow`,`color`,`red`)
    })
})