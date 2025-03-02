//Task 1: Creating a Book Class

class Book:
    def __init__(self, title, author, isbn, copies):
        """Initialize a Book object with title, author, ISBN, and available copies."""
        self.title = title
        self.author = author
        self.isbn = isbn
        self.copies = copies

    def getDetails(self):
        """Return a formatted string with book details."""
        return f"Title: {self.title}\nAuthor: {self.author}\nISBN: {self.isbn}\nCopies Available: {self.copies}"

    def updateCopies(self, quantity):
        """Update the number of copies when a book is borrowed or returned."""
        self.copies += quantity
        if self.copies < 0:
            self.copies = 0  # Ensuring copies don't go negative
        print(f"Updated copies: {self.copies}")


# Example Usage
book1 = Book("The Great Gatsby", "F. Scott Fitzgerald", 9780743273565, 5)

print(book1.getDetails())  # Display book details

book1.updateCopies(-1)  # Borrow a book (reduce copies)
book1.updateCopies(2)   # Return books (increase copies)

print(book1.getDetails())  # Check updated details


//Task 2: Creating a Borrower Class

class Borrower {
    constructor(name, borrowerId) {
      this.name = name;
      this.borrowerId = borrowerId;
      this.borrowedBooks = []; // Initially, the borrower has no borrowed books
    }
  
    borrowBook(book) {
      this.borrowedBooks.push(book);
    }
  
    returnBook(book) {
      this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
  }
  
  // Test Cases
  const borrower1 = new Borrower("Alice Johnson", 201);
  
  borrower1.borrowBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks);
  // Expected output: ["The Great Gatsby"]
  
  borrower1.returnBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks);
  // Expected output: []


  //Task 3: Creating a Library Class

  // Task 1: Creating the Book Class
class Book {
    constructor(title, author, isbn, copies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
  
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
  
    updateCopies(quantity) {
      this.copies += quantity;
      if (this.copies < 0) {
        this.copies = 0; // Ensuring copies don't go negative
      }
      console.log(`Updated copies for "${this.title}": ${this.copies}`);
    }
  }
  
  // Task 2: Creating the Borrower Class
  class Borrower {
    constructor(name, borrowerId) {
      this.name = name;
      this.borrowerId = borrowerId;
      this.borrowedBooks = []; // List of borrowed book titles
    }
  
    borrowBook(bookTitle) {
      this.borrowedBooks.push(bookTitle);
      console.log(`${this.name} borrowed "${bookTitle}".`);
    }
  
    returnBook(bookTitle) {
      this.borrowedBooks = this.borrowedBooks.filter(book => book !== bookTitle);
      console.log(`${this.name} returned "${bookTitle}".`);
    }
  }
  
  // Task 3: Creating the Library Class
  class Library {
    constructor() {
      this.books = []; // Array to store Book instances
      this.borrowers = []; // Array to store Borrower instances
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`Book added: ${book.title}`);
    }
  
    listBooks() {
      if (this.books.length === 0) {
        console.log("No books available in the library.");
        return;
      }
  
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(book.getDetails());
      });
    }
  }
  
  // Testing the Library System
  
  // Creating a Library instance
  const library = new Library();
  
  // Creating Book instances
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 789012, 3);
  
  // Adding books to the library
  library.addBook(book1);
  library.addBook(book2);
  
  // Listing all books in the library
  library.listBooks(); 
  // Expected output:
  // Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4
  // Title: To Kill a Mockingbird, Author: Harper Lee, ISBN: 789012, Copies: 3
  
  // Creating a Borrower instance
  const borrower1 = new Borrower("Alice Johnson", 201);
  
  // Borrower borrows a book
  borrower1.borrowBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]
  
  // Borrower returns a book
  borrower1.returnBook("The Great Gatsby");
  console.log(borrower1.borrowedBooks); // Expected output: []