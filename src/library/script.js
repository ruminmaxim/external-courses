// Getting data
var dataObject = dataRequest();
function dataRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rsu-library-api.herokuapp.com/books', false);
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// Creating grig of books
generateBooks();
function generateBooks() {
    dataObject.forEach(function (anotherBook) {
        var booksContainer = document.querySelector('.content_books_grid');
        var book = createBook(anotherBook);
        booksContainer.appendChild(book);
    });
}

// Creating book
function createBook(anotherBook) {

    // Container of book
    var bookContainer = document.createElement('div');
    bookContainer.classList.add('book');

    // Cover of book
    var bookCover = document.createElement('div');
    bookCover.classList.add('book_cover');
    bookContainer.appendChild(bookCover);
    var newCover = document.createElement('img');
    newCover.src = anotherBook.image_url;
    bookCover.appendChild(newCover);

    // Title of book
    var bookTitle = document.createElement('h4');
    bookTitle.classList.add('book_title');
    bookContainer.appendChild(bookTitle);
    var newTitle = document.createTextNode(anotherBook.title);
    bookTitle.appendChild(newTitle);

    // Author of book
    var bookAuthor = document.createElement('span');
    bookAuthor.classList.add('book_author');
    bookContainer.appendChild(bookAuthor);
    var newAuthor = document.createTextNode('by ' + anotherBook.author.firstName + ' ' + anotherBook.author.lastName);
    bookAuthor.appendChild(newAuthor);

    // Rating of book
    var rating = createRating(rating);
    bookContainer.appendChild(rating);

    return bookContainer;
}

// Creating rating of book
function createRating(rating) {
    var stars = document.createElement('div');
    stars.classList.add('rating');
    stars.classList.add('star-hover');
    for (var i = 1; i <= 5; i++) {
        var star = document.createElement('span');
        stars.appendChild(star);
    }
    return stars;
}