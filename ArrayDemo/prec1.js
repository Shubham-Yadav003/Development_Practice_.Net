var color = ["red", "green", "blue"];
console.log(color);

// Creating array using constructor

var myArray = new Array("Shubham", "Krishna", "Kundan");
console.log(myArray);

// adding element to array
myArray.push("yellow");
console.log(myArray);

// removing element from array
myArray.pop();
console.log(myArray);

// adding element to array at the beginning
myArray.unshift("black");
console.log(myArray);

// removing element from array at the beginning
myArray.shift();
console.log(myArray);

// insert in Middle
myArray.splice(2,0,"PineApple");
console.log(myArray);

var twoDimensionalArray = 
[
    [1,2,3],[4,5,6],[7,8,9]
];

console.log("Elements of the Two Dimensional Array:");
for(var i=0; i<twoDimensionalArray.length; i++){
    let row = "";
    for(var j=0; j<twoDimensionalArray[i].length; j++){
        row += twoDimensionalArray[i][j]+ " ";
    }
    console.log(row);
}

// using escaping quotes inside string
var str1 =  'it\'s okey';
var str2 = "He said \"Goodbye\" ";

console.log(str1);
console.log(str2);

// escape sequence
var escape1 = "This is a brown \njumps over the lazy dog.";
var escape2 = "This is a brown\tjumps over the lazy dog.";
var escapce3 = "C:\\Users\\Downloads";

console.log(escape1);
console.log(escape2);
console.log(escapce3);

// indexOf and lastIndexOf
var str = "Hello World";
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("o"));


