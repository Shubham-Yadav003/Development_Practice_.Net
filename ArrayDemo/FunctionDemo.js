function sayHello(){
    console.log("Hello World");
}
sayHello();
//*********************************************************************************************************//
function add(a,b){
    return a+b;
}       
let sum = add(5,10);
console.log("Sum: " + sum);

//****************************************************************************************************** */

function greet(name = "Guest"){
    console.log("Hello, " + name + "!");
}
greet("Alice");
greet(); // Uses default parameter

//****************************************************************************************************** */
// return multiple values using array

function calculate(a, b) {
    var quotient = a / b;
    var arr = [quotient, a, b];
    return arr;
}
var result = calculate(10, 2);
console.log("Quotient: " + result[0]);
console.log("First Number: " + result[1]);
console.log("Second Number: " + result[2]);

//****************************************************************************************************** */
// return multiple values using object
function getValues(){
    return {
        x: 10,
        y: 20
    };
}

let res = getValues();
console.log("X: " + res.x);
console.log("Y: " + res.y);

//****************************************************************************************************** */
// simuulating C# out parameter
function modifyObject(obj){
    obj.a = 100;
    obj.b = 200;
}

let objResult = {};
modifyObject(objResult);
console.log("A: " + objResult.a);
console.log("B: " + objResult.b);

//****************************************************************************************************** */
// destructuring assignment to return multiple values
function getCoordinates(){
    return {x:10, y:20};
}

let {x, y} = getCoordinates();
console.log("X: " + x);
console.log("Y: " + y);

//****************************************************************************************************** */
// function expression
let multiply = function(a, b){
    return a * b;
}   
console.log("Product: " + multiply(5, 10));

//****************************************************************************************************** */