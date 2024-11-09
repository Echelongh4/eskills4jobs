// Step 1: Create an array 'books' that contains book objects
let books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 }
];

// Step 2: Write a function 'addBook' to add a new book object to the array
function addBook(newBook) {
    books.push(newBook);
}

// Step 3: Write a function 'listBooks' to list all books in the array
function listBooks() {
    books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}`);
    });
}

// Step 4: Add a few books using 'addBook'
addBook({ title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 });
addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951 });

// Step 5: List all books using 'listBooks'
// listBooks();
