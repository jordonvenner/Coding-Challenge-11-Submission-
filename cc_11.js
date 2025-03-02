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