document.querySelector('input.content_books_filterBar_search').addEventListener('keyup', debounce(handleSearch, 500));
document.querySelector('.content_books_filterBar_category').addEventListener('click', sortClick);
document.querySelector('.menu_tags').addEventListener('click', tagClick);

function clickableRatings() {
    var allRatings = document.querySelectorAll('.book > div.rating');
    for (var i = 0; i < allRatings.length; i++) {
        allRatings[i].addEventListener('click', changeRating);
    }
    document.querySelector('div.newbook.rating').addEventListener('click', newBookRating);
}

function clearForm() {
    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('name').value = '';
    location.href = '#close';
    document.querySelectorAll('div.newbook.rating > span').forEach(element => {
        if (element.className.includes('rated')) {
            element.classList.remove('rated');
        };
    });
}