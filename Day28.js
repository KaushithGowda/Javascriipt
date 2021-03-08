$(function () {
    $(`#fade_out`).hover(function () {
        $(`div`).fadeOut(1000)
    })
    $(`#fade_in`).hover(function () {
        $(`div`).fadeIn(1000)
    })
    //fadeToggle is mixture of fadeOut and fadeIn
    $(`#fade_toggle`).hover(function () {
        $(`div`).fadeToggle(1000)
    })
    //fadeTo method is to change opacity of element
    $(`#fade_to`).hover(function () {
        $(`div`).fadeTo(1000, 0.5)
    })
    $(`#slide_up`).click(function () {
        $(`div`).slideUp(2000)
    })
    $(`#slide_down`).click(function () {
        $(`div`).slideDown(2000)
    })
    //slideToggle is mixture of slideDown and slideUp
    $(`#slide_toggle`).click(function () {
        $(`div`).slideToggle(2000)
    })
    $(`#hide`).click(function () {
        $(`div`).hide(2000)
    })
    $(`#show`).click(function () {
        $(`div`).show(2000)
    })
    //toggle is mixture of show and hide
    $(`#toggle`).click(function () {
        $(`div`).toggle(2000)
    })
})

$(function () {
    $(`#add_class`).click(function () {
        //we can add more class by calling .addClass agian and again
        $(`#division1`).addClass(`newClass`)
    })
    $(`#remove_class`).click(function () {
        $(`#division1`).removeClass(`newClass`)
    })
    $(`#add_attribute`).click(function () {
        $(`a`).attr(`target`, `_blank`)
    })
    $(`#remove_attribute`).click(function () {
        $(`a`).removeAttr(`target`)
    })
    //append method will insert a last child element to an element 
    $(`#append`).click(function () {
        $(`#division1`).append(`<p>This is a appended paragraph</p>`)
    })
    //prepend method will insert a first child element to an element 
    $(`#prepend`).click(function () {
        $(`#division1`).prepend(`<p>This is a prepended paragraph</p>`)
    })
    //.before method will add an element before the element
    $(`#before`).click(function () {
        $(`#division1`).before(`<h1>This is a added before div tag</h1>`)
    })
    //.after method will add an element after the element
    $(`#after`).click(function () {
        $(`#division1`).after(`<h1>This is a added after div tag</h1>`)
    })
    //.empty method will empty content in the element
    $(`#empty`).click(function () {
        $(`#division1`).empty()
    })
    //.detach method will detach the element
    $(`#detach`).click(function () {
        $(`#division1`).detach()
    })
    //.wrap will wrap each element with separate h1
    $(`#wrap`).click(function () {
        $(`li`).wrap(`<h1>`)
    })
    //.wrapAll will wrap all element with only one h1 
    $(`#wrap_all`).click(function () {
        $(`li`).wrapAll(`<h1>`)
    })
})
















































