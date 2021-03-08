//Parent object of all browser objects
console.log(window);
//Child object of window objects
/**
 *console.log(document);
 *console.log(location);
 *console.log(history);
 *console.log(screen);
 *console.log(navigator);
*/

//Check video and get full defination 
// BOM :: It is an API,Belongs to browser

//window.outerHeight :: size of browser window including toolbar
//window.outerWidth :: size of browser window excluding toolbar
console.log(`outerHeight :: ${window.outerHeight}`);
console.log(`outerWidth:: ${window.outerWidth}`);
console.log(`innerHeight :: ${window.innerHeight}`);
console.log(`innerWidth :: ${window.innerWidth}`);

//window.screenY :: distance from screen Y axis to browser Y axis
//window.screenX :: distance from screen X axis to browser X axis
console.log(`screenX:: ${window.screenX}`);
console.log(`screenY:: ${window.screenY}`);

//Opening a new window using a inbuild method
var newWindow;
function open1() {      
    //For empty page use empty string and target = _blank  
    newWindow = window.open(` `,`target=_blank`,`width=200px`,`height=200px`);
    newWindow.document.write(`This is a new window`)
}
function close1() {
    newWindow.close();
}
function moveTo1() {
    newWindow.moveTo(300,400);
}
function moveBy1() {
    newWindow.moveBy(200,200);
}
function resizeTo1() {
    newWindow.resizeBy(300,300);
}
function resizeBy1() {
    newWindow.resizeTo(100,100);
}

function facebook() {
    newWindow = window.open(`https://www.facebook.com/`,`target=_blank`,`width=200px`,`height=400px`);
}

//Changing the location of website using location.href=`<url>`,location.assign(`<url>`),location = `<url>`

console.log(window.location);
// location.href=`https://www.instagram.com/`
// location = `https://www.instagram.com/`
// location.assign(`https://www.instagram.com/`)

//History
//type window method in console of window
//window.history.lenght :: No of url
//window.history.forward() :: Goes to previous url
//window.history.backward() :: Goes to next url
//window.history.go(<-1 or +1>) :: Goes to particular url




























































