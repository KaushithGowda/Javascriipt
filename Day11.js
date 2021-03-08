myName = ` Javascript`// global variable

// Window object is a global object
console.log(this);

//-------------------------------Start of Execution stack-------------------------------------
/*3**Execution context of third() function */
/*2**Execution context of second() function */
/*1**Execution context of first() function */
/**Execution context :: Order in which the function are executed
 * 1.Global Context (default)
 * 2.Function calls
* Note :: 
    1.Control returns to the function call statement after execution of functions then execution context of each function will be deleted.
    2.After the functions are deleted then the execution context will be deleted.  
*/
//-------------------------------End of Execution stack---------------------------------------

/**
 * Execution context Object
 * 1.Variable Object (VO)
 * 2.Scope chain
 * 3."this" variable
*/

/**
 * Two phases of Execution context
 * 1.Creation phase :: Variable Object (VO),Scope chain,"this" variable are created in this phase
 * 2.Execution phase ::  
 * 
 *    1.1.Variable Object(VO) :: Argument/formal parameters Object,body of function,Function Declaration,
 *                            Variables set to undefined
 *    1.2.Scope Chain :: It is an area in which particular variables can be acccessed with 
 *                    respect to a particular function only.
 *          1.2.1.In first() function we can access body of first() and variables present in global variables.
 *          1.2.2.In second() function we can access body of second() and variables present in global 
 *                variables.
 *          1.2.3.In third() function we can access body of third() and variables present in global variables.
 * 
 *     1.3.this Variable :: 
 *          1.3.1.this varible in a Function call points to global object i.e window(always in the browser)
 *          1.3.2.this varible in a method call points to object through which method has been called.
 * 
 * 2.1
*/

function first() {
    var a = `Hello`
    console.log(a);//1
    second()
    var x = a + myName
    console.log(x);//6
}
function second() {
    var b = `Hey`
    console.log(b);//2
    third()
    var z = b + myName
    console.log(z);//5
}
function third() {
    var c = `Hi`
    console.log(c);//3
    var y = c + myName//4
    console.log(y);
}
first();

//Hoisting :: Even before execution phase the function body will be present in the stack and if the variable is not defined by developer, undefined will be assgined 

var a = `hello`
first1()
function first1() {
    console.log(b);//undefined during creation phase
    var b = `hi`
    console.log(b);//hi
    second2()
    
    //Lexical Scoping :: The inner function can access variables in outer function
    function second2() {
        console.log(b);//outer function variable
        var b = `What's up?`//inner function variable same as outer function variable, here priority will be given to inner function
        console.log(b);//inner function variable
        var c = `hey`
        third3()
    }
}

function third3() {
    var d = `javascript`
    // console.log(a+b+c+d);//error
}

// ----------------------------------------------------------------------------------------- 
age = 23

function myAge() {
    console.log(age);//undefined :: because there is no inner function to take the outer variable
    var age = 80
    console.log(age);//80
}

myAge()
console.log(age);//23