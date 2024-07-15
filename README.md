# CRUD Lab Exercise - Library Management System Exercise

In this exercise, you'll create a simple Library Management System using the concepts you learned in the Todo List application lab. Instead of managing tasks, you'll be managing books in a library.

## Part 1: Creating the User Interface

1. Set up your project:
    - Create a new directory for your project.
    - Initialize a new Node.js project and install the `prompt-sync` package.
    - Create an `index.js` file.
2. Implement the basic structure:
    - Import the `prompt-sync` package.
    - Create an empty `App` function.
    - Implement a `showMenu` function that displays the following options:
        1. Show all books
        2. Add a new book
        3. Check out a book
        4. Return a book
        5. Exit
    - Implement a `getUserInput` function to get the user's choice.
3. Update the `App` function:
    - Use a while loop to keep the program running until the user chooses to exit.
    - Use if/else statements to handle different user choices.

## Part 2: Creating the Data Model

1. Create a `books` array to store the books in the library.
2. Implement the following functions:
    - `addBook(books, title, author, isbn)`: Adds a new book to the library.
    - `checkOutBook(books, isbn)`: Marks a book as checked out.
    - `returnBook(books, isbn)`: Marks a book as returned.
3. Each book should have the following properties:
    - `isbn` (use this as the unique identifier)
    - `title`
    - `author`
    - `isCheckedOut` (boolean)

## Part 3: Integrating the Model and the Interface

1. Update the `showAllBooks` function to display all books in the library, including their checkout status.
2. Implement the `addNewBook` function to prompt the user for book details and use the `addBook` function from the data model.
3. Implement the `checkOutBookInterface` function to prompt the user for the ISBN of the book they want to check out.
4. Implement the `returnBookInterface` function to prompt the user for the ISBN of the book they want to return.
5. Update the `App` function to use these new interface functions.

## Bonus Challenges:

1. Implement input validation to ensure that ISBNs are unique and in the correct format.
2. Add a feature to search for books by title or author.
3. Implement a "late return" feature that calculates fines for overdue books.

## Testing Your Application:

After completing the implementation, test your Library Management System by:

1. Adding several books to the library
2. Displaying all books
3. Checking out a book
4. Trying to check out an already checked-out book
5. Returning a book
6. Displaying all books again to verify the changes

Remember to handle potential errors, such as trying to check out or return a non-existent book.

Good luck, and happy coding!
