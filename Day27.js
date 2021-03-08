//FORM EVENTS::

$(document).ready(function () {
    //1.focus
    //Applied only for name id
    // $(`#name`).focus(function () {
    //     $(`#name`).css({"background-color":`yellow`})
    // })
    //2.blur
    //Applied only for name id
    // $(`#name`).blur(function () {
    //     $(`#name`).css({"background-color":`grey`})
    // })
    //focus and focusin are same property
    // $(`input`).focusin(function () {
    //     $(this).css({"background-color":`aqua`})
    // })
    //blur and focusout are same property
    // $(`input`).focusout(function () {
    //     $(this).css({"background-color":`grey`})
    // })
    //3.select wont work for radio button  
    // $(`input`).select(function () {
    //     $(this).css({ "background-color": "yellow", "border": "red 2px solid" })
    // })
})

//SUBMIT EVENT::

$(function () {
    // $(`#submit`).submit(function () {
    //     alert(`The form is submitted`)
    // })

    //serialize method
    $(`#submit`).submit(function () {
        //---------------------------------------------------this keyword doubt
        form_values = $(this).serialize()
        alert(form_values)
    })
})

// BROWSER EVENTS::
$(function () {
    //For browser event we should use window object
    // 1.resize
    // $(window).resize(function () {
    //     // alert(`window resized`)
    //     $(`*`).css(`background-color`,`aqua`)
    // })
    // 2.scroll
    // $(window).scroll(function () {
    //     alert(`window scrolled`)
    // })
})

$(function () {
    $(`#fade_out`).hover(function () {
        $(`div`).fadeOut(1000)
    })
    $(`#fade_in`).hover(function () {
        $(`div`).fadeIn(1000)
    })
    $(`#fade_toggle`).hover(function () {
        $(`div`).fadeToggle(1000)
    })
    $(`#fade_to`).hover(function () {
        $(`div`).fadeTo(1000,0.5)
    })
})































































