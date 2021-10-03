class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  // adding items to the list
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
    list.appendChild(row);
  }

  // show alert message after adding the item
  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  // function to delete the books
  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  // clearing the fields after entering the inputs
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  // function to display books
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book){
      const ui  = new UI();
      // Add book to UI
      ui.addBookToList(book);
    });
  } 
  // method to add item into the local storage
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
// method to remove the item from the list
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function(book, index){
     if(book.isbn === isbn) {
      books.splice(index, 1);
     }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);
// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value,
  // Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Add to Local storage
    Store.addBook(book);
    // Show success
    ui.showAlert('Book Added!', 'success');
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete the items
document.getElementById('book-list').addEventListener('click', function(e){
  // Instantiate UI
  const ui = new UI();
  // Delete book
  ui.deleteBook(e.target);
  // Remove item from the local storage 
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  // Show message
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});