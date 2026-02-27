// creating object
var person = {
    name: "Peter",
    age: 30,
    gender: "Male",
    displayName: function () {
        return "Name: " + this.name;
    }
};

// accessing object properties
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log(person["displayName"]());// calling method

// book object example
var book = {
    "name" : "JavaScript: The Good Parts",
    "author" : "Douglas Crockford",
    "year" : 2008,
   
}

for(var key in book){
    console.log(key + ": " + book[key]);
}


//******************************************************************************************************* */
var student = {
    name: "Ravi",
    age: 22,
    courses: ["Math", "Physics", "Chemistry"],
    address: {
        city: "New York",
        country: "USA"
    }
}


console.log("Student Name: " + student.name);
console.log("Courses: " + student.courses.join(", "));
console.log("City: " + student.address.city);

var obj = [
    {
        id: 1,
        name: "Alice",
        age: 25,
        grade: "A"
    },


    {
        id: 2,
        name: "Bob",
        age: 22,
        grade: "B"
    },


    {
        id: 3,
        name: "Charlie",
        age: 28,
        grade: "A"
    }
]

console.log("First Student Name: " + obj[0].name);
console.log("Second Student Grade: " + obj[0].grade);

for(var i=0; i<obj.length;i++){
    console.log("Student", i+1);
    console.log("ID: " + obj[i].id);
    console.log("Name: " + obj[i].name);
    console.log("Age: " + obj[i].age);
    console.log("Grade: " + obj[i].grade);
    console.log("-------------------");
}


