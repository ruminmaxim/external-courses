let url = 'https://rsu-library-api.herokuapp.com/books';
let dataObject = {};
callApi(url, generateBooks);
let state = {
    category: 'id',
    key: '',
    tag: ''
};

function generateBooks(books) {
    var booksContainer = document.querySelector('div.content_books_grid');
    booksContainer.innerHTML = '';
    books.forEach(function (anotherBook) {
        var book = createBook(anotherBook);
        booksContainer.appendChild(book);
    });
    clickableRatings();
}

function createBook(anotherBook) {

    var bookContainer = document.createElement('div');
    bookContainer.classList.add('book');
    bookContainer.setAttribute('data-book', anotherBook.id);

    var bookCover = document.createElement('div');
    bookCover.classList.add('book_cover');
    bookContainer.appendChild(bookCover);
    var newCover = document.createElement('img');
    newCover.src = anotherBook.image_url;
    newCover.alt = anotherBook.title;
    bookCover.appendChild(newCover);

    var bookTitle = document.createElement('h4');
    bookTitle.classList.add('book_title');
    bookContainer.appendChild(bookTitle);
    var newTitle = document.createTextNode(anotherBook.title);
    bookTitle.appendChild(newTitle);

    var bookAuthor = document.createElement('span');
    bookAuthor.classList.add('book_author');
    bookContainer.appendChild(bookAuthor);
    var newAuthor = document.createTextNode('by ' + anotherBook.author.firstName + ' ' + anotherBook.author.lastName);
    bookAuthor.appendChild(newAuthor);

    var rating = createRating(rating, anotherBook);
    bookContainer.appendChild(rating);
    return bookContainer;
}

function createRating(rating, anotherBook) {
    var stars = document.createElement('div');
    stars.classList.add('rating');
    for (var i = 0; i < 5; i++) {
        var star = document.createElement('span');
        star.classList.add('star');
        stars.appendChild(star);
        if (5 - i === anotherBook.rating) {
            star.classList.add('rated');
        }
        star.setAttribute('data-rating', 5 - i)
    }
    return stars;
}

function addNewBook() {
    var date = new Date().getTime();
    var setRating = 0;
    var allCheckboxes = document.querySelectorAll("div.field_ckeckboxes > div > input");
    var checkedCategories = Array.from(allCheckboxes).filter(ch => ch.checked).map(ch => ch.id);
    for (var i = 0; i < 5; i++) {
        if (document.querySelectorAll('div.newbook.rating > span')[i].className === 'star rated') {
            setRating = 5 - i;
        }

    }
    dataObject.push({
        "id": dataObject.length + 1,
        "categories": checkedCategories,
        "cost": 100,
        "title": document.getElementById('name').value,
        "image_url": 'img/no_cover.jpg',
        "author": {
            "firstName": document.getElementById('first_name').value,
            "lastName": document.getElementById('last_name').value
        },
        "rating": setRating,
        "createdAt": date,
        "updatedAt": date,

    });
    clearForm()
    handleSearch()
}