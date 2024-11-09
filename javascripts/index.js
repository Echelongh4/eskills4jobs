// let isTrue = false;
// let isFalse = false;

// let output = isTrue || isFalse;

// console.log(output);

// let age = 34;
// if (age < 18){
//     console.log("you are not eligible");
// }else{
//     console.log("You are eligible");
// }
// let age = 17;

// if (age < 18) {
//     console.log("You are underage, so you are not eligible");
// } else if (age >= 18 && age <= 50) {
//     console.log("You are eligible");
// } else if (age > 50) {
//     console.log("You are not eligible");
// }

// // switch cases
// let day = 4;
// switch (day)

// let greting = "Hello my dear friend";
// console.log(greting);

//function
// function greetUser(name) {
//     console.log("Hello! " + name);
// }

// greetUser("lois");
// greetUser("John");

// function add(a,b){
//     console.log(a+b);
// }

// add(10,5);

// arrow function
// const addition = (a,b) =>{
//     let result = a+b;
//     return result;
// }
// console.log(addition(2, 4));


// const greting = () =>{
//     const message = "Hello";
//     console.log(message);
// }

// greting();

// const calculateArea = (length, width) =>{
    
//     let result = length*width;
//     return result;

// }
//   console.log(calculateArea(6,9 ));



// Array

// let students = ["Christy", "Gloria", "Lois", "Prince", "Sly" ];
// console.log(students.length);

// new Array

//let courses = new Array("Maths", "English", "Science", "Social Studies",);
// console.log(courses);

// console.log(courses.pop());
// console.log(courses);
//add a new courses to the array

// courses.push("Biology");
// console.log(courses)

// adding new value to the begining of the courses array
// courses.unshift("Chemistry", "physics");
// console.log(courses);

// the position of an element

//console.log(courses.indexOf("English"));

// // for loops in an Array
// for (let i = 0; i <courses.length; i++){
//   console.log(courses[i]);
  
// }

// // for loops in an Array
// for (let i = 0; i < courses.length; i+=2) {
//   console.log(i);
//   console.log(courses[i]);

// }

// forEach Loop
// courses.forEach((course) => {
// console.log(course);

// })

// OBJECTS

// //


//};
// students.age=20;
// students.email= "baafiasm54@gmail.com"
//console.log(students);
// Deleting the greet method
//delete(students.lastName);

 //console.log(students.greet());
//console.log(students);
//console.log(students.courses['2']);

//Objects in Array

let students =[
  {
    id: 1, studentName: "Edward Arthur", age: 20, email: "eager@gmail.com"
  },
  {
    id: 2, studentName: "Edward Arthur", age: 20, email: "eager@gmail.com"
  },
  {
    id: 3, studentName: "Edward Arthur", age: 20, email: "eager@gmail.com"
  },
  {
    id: 4, studentName: "Edward Arthur", age: 20, email: "eager@gmail.com"
  }
]
//for (i=0, i<students.length; )

console.log(students[2].email);
