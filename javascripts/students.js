// Step a: Create a Student constructor function (or class)
function Student(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
}

// Step c: Create an empty array to store multiple Student objects
let students = [];

// Step d: Function to add students to the array
function addStudent(student) {
    students.push(student);
}

// Step e: Function to display student information
function listStudents() {
    students.forEach((student, index) => {
        console.log(`Student ${index + 1}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grades: ${student.grades.join(", ")}`);
        console.log("-----------------------");
    });
}

// Adding some students
addStudent(new Student("Alice", 20, [85, 90, 78]));
addStudent(new Student("Bob", 22, [88, 76, 92]));
addStudent(new Student("Charlie", 21, [90, 85, 87]));

// Displaying the student information
listStudents();
