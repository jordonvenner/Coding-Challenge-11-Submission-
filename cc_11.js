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


  //Task 4: Implementing Book Borrowing


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
  
    addBorrower(borrower) {
      this.borrowers.push(borrower);
      console.log(`Borrower added: ${borrower.name}`);
    }
  
    lendBook(borrowerId, isbn) {
      // Find the book by ISBN
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) {
        console.log("Book not found.");
        return;
      }
  
      // Check if the book has available copies
      if (book.copies <= 0) {
        console.log(`No copies of "${book.title}" are available.`);
        return;
      }
  
      // Find the borrower by ID
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
      if (!borrower) {
        console.log("Borrower not found.");
        return;
      }
  
      // Update the book's copies (reduce by 1)
      book.updateCopies(-1);
  
      // Add the book to the borrower's borrowedBooks list
      borrower.borrowBook(book.title);
    }
  }
  
  // Task 4: Testing Book Borrowing
  
  // Creating a Library instance
  const library = new Library();
  
  // Creating Book instances
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 789012, 3);
  
  // Adding books to the library
  library.addBook(book1);
  library.addBook(book2);
  
  // Creating a Borrower instance
  const borrower1 = new Borrower("Alice Johnson", 201);
  
  // Adding the borrower to the library
  library.addBorrower(borrower1);
  
  // Borrowing a book
  library.lendBook(201, 123456); // Alice borrows "The Great Gatsby"
  
  // Check updated book details
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
  
  // Check borrower's borrowed books list
  console.log(borrower1.borrowedBooks);
  // Expected output: ["The Great Gatsby"]


  //Task 5: Implementing Book Returns

  // Book Class
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
        this.copies = 0; // Prevent negative copies
      }
      console.log(`Updated copies for "${this.title}": ${this.copies}`);
    }
  }
  
  // Borrower Class
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
  
  // Library Class
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
  
    addBorrower(borrower) {
      this.borrowers.push(borrower);
      console.log(`Borrower added: ${borrower.name}`);
    }
  
    lendBook(borrowerId, isbn) {
      // Find the book by ISBN
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) {
        console.log("Book not found.");
        return;
      }
  
      // Check if the book has available copies
      if (book.copies <= 0) {
        console.log(`No copies of "${book.title}" are available.`);
        return;
      }
  
      // Find the borrower by ID
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
      if (!borrower) {
        console.log("Borrower not found.");
        return;
      }
  
      // Update the book's copies (reduce by 1)
      book.updateCopies(-1);
  
      // Add the book to the borrower's borrowedBooks list
      borrower.borrowBook(book.title);
    }
  
    returnBook(borrowerId, isbn) {
      // Find the book by ISBN
      const book = this.books.find(b => b.isbn === isbn);
      if (!book) {
        console.log("Book not found.");
        return;
      }
  
      // Find the borrower by ID
      const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
      if (!borrower) {
        console.log("Borrower not found.");
        return;
      }
  
      // Check if the borrower actually borrowed the book
      if (!borrower.borrowedBooks.includes(book.title)) {
        console.log(`${borrower.name} did not borrow "${book.title}".`);
        return;
      }
  
      // Update the book's copies (increase by 1)
      book.updateCopies(1);
  
      // Remove the book from the borrower's borrowedBooks list
      borrower.returnBook(book.title);
    }
  }
  
  // TEST CASES
  
  // Create a Library instance
  const library = new Library();
  
  // Create Book instances
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 789012, 3);
  
  // Add books to the library
  library.addBook(book1);
  library.addBook(book2);
  
  // Create a Borrower instance
  const borrower1 = new Borrower("Alice Johnson", 201);
  
  // Add the borrower to the library
  library.addBorrower(borrower1);
  
  // Borrowing a book
  library.lendBook(201, 123456); // Alice borrows "The Great Gatsby"
  
  // Check updated book details after borrowing
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
  
  // Check borrower's borrowed books list after borrowing
  console.log(borrower1.borrowedBooks);
  // Expected output: ["The Great Gatsby"]
  
  // Returning the book
  library.returnBook(201, 123456); // Alice returns "The Great Gatsby"
  
  // Check updated book details after returning
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
  
  // Check borrower's borrowed books list after returning
  console.log(borrower1.borrowedBooks);
  // Expected output: []