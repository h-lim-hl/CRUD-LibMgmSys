const prompt = require('prompt-sync')();

const AUTHORPOOL = [
    "Yasu Ekundayo", "Uzoma Karuna", "Shams Andie", "Baako Jip",
    "Qing Gerry", "Lebohang Nitya", "Ulloriaq Balwinder"
];

const BOOKTITLEPOOL = [
    "Slave Of The East", "Rebel Of The Mountain", "Horses Of Perfection",
    "Aliens Of Fire",  "Children And Warriors", "Robots And Doctors",
    "Intention With A Goal", "Luck Without A Conscience",
    "Forsaken By The West", "Visiting The West"
];

let idCount = 0;
let books = [];

function doesIsbnExist(books, isbn) {
    for(let book of books) {
        if(book.isbn === isbn) {
            return true;
        }
    }
    return false;
}

function getRandomIsbn () {
    return (parseInt(Math.random() * 10 % 2) == 0) ?
     Math.random() * 10 : Math.random() * 13;
}

function addBook(books, book) {
    if(validateBook(book)) {
        books.push(book);
        console.log(`New Book ${book.title} added`);
        return true;
    } else {
        console.log("Book Data is invalid!");
        return false;
    }
}

function addBook(books, title, author, isbn) {
    let newBook = {
        uid: idCount++,
        title: title,
        author: author,
        isbn: isbn,
        isCheckedOut: false
    };
    addBook(books, newBook);
}

function addRandomBook(books) {
    addBook(books,
        BOOKTITLEPOOL[parseInt(Math.random() * BOOKTITLEPOOL.length)],
        AUTHORPOOL[parseInt(Math.random() * AUTHORPOOL.length)],
        getRandomIsbn()
    );
}

function returnBook(books, isbn) {
    for(let book of books) {
        if(book.isbn === isbn && book.isCheckedOut) {
            book.isCheckedOut = true;
            console.out("Book Returned!");
            return;
        }
    }
    console.log(`No book with ISBN: ${isbn} was loaned out!`);
}

function checkOutBook(books, isbn) {
    for (let book of books) {
        if (book.isbn === isbn && !book.isCheckedOut) {
            book.isCheckedOut = true;
            console.log(`Book \"${book.title}\" successfully checked out!`);
            return;
        }
    }
    console.log(`Book with ISBN No.: ${isbn} cannot be found!`);
}

function showMenu() {
    console.log('===== Menu =====');
    console.log('1 - Show All Books');
    console.log('2 - Add a new Book');
    console.log('3 - Check out a Book');
    console.log('4 - Return Book');
    console.log('5 - Exit ');
}

function getUserInput() {
    return prompt("Please enter an operation number: ");
}

function App() {
    let running = true;
    while (running) {
        showMenu();
        const input = getUserInput();
        switch (input) {
            case 1:
                //Show All Books
                break;
            case 2:
                //Add new Book
                break;
            case 3:
                //Check out a Book
                break;
            case 4:
                //Return Book
                break;
            case 5:
                //Exit
                running = false;
                break;
            default:
                console.log("Invalid option!");

        }
    }
}

App();