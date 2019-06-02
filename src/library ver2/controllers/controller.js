function sortClick(event) {
    var target = event.target;
    if (event.target.localName !== 'li') { return }
    document.querySelectorAll('ul.content_books_filterBar_category li').forEach(element => {
        element.classList.remove('active_category');
    });
    target.classList.add('active_category');
    state.category = target.dataset.category;
    handleSearch()
}

function tagClick(event) {
    var target = event.target;
    if (event.target.localName !== 'li') { return }
    if (target.className === 'tag') {
        document.querySelectorAll('ul.menu_tags li').forEach(element => {
            element.classList.remove('tag_choosed');
        });
        target.classList.add('tag_choosed');
        state.tag = target.dataset.tag;
    }
    else if (target.className === 'tag tag_choosed') {
        target.classList.remove('tag_choosed');
        state.tag = '';
    };
    handleSearch()
}

function handleSearch() {
    filteredDataObject = JSON.parse(JSON.stringify(dataObject));
    state.key = document.querySelector('input.content_books_filterBar_search').value.toLowerCase();
    switch (state.category) {
        case 'id':
            {
                filteredDataObject.sort((a, b) => {
                    return a.id < b.id ? 1 : -1;
                });
                break;
            }
        case 'rating':
            {
                 filteredDataObject.sort((a, b) => {
                    return a.rating < b.rating ? 1 : -1;
                });
                break;
            }
        case 'date':
            {
                 filteredDataObject.sort((a, b) => {
                    return a.updatedAt < b.updatedAt ? 1 : -1;
                });
                break;
            }
        case 'free':
            {
                filteredDataObject = filteredDataObject.filter(a => a.cost === 0 ? true : false);
                break;

            }
        default: break;
    }

    if (state.tag !== '') {
        filteredDataObject = filteredDataObject.filter(compareTag);
        function compareTag(a) {
            if (a.categories.includes(state.tag)) { return true; }
            return false;
        }
    }

    if (state.key !== '') {
        filteredDataObject = filteredDataObject.filter(function (element) {
            return element.title.split(' ').concat(element.author.firstName, element.author.lastName)
                .some(function (str) {
                    return str.toLowerCase().startsWith(state.key);
                });
        });
    }
    generateBooks(filteredDataObject);
    clickableRatings();
}

function changeRating(event) {
    var target = event.target;
    if (target.className === 'star') {
        rate(target);
    }
    else if (target.className === 'star rated') {
        unrate(target)
    };
}

function rate(target) {
    var counterRating = Number(target.dataset.rating);
    var bookNumber = Number(target.parentElement.parentElement.dataset.book);
    dataObject.forEach(element => {
        if (element.id === bookNumber) {
            element.rating = counterRating; // eslint-disable-line no-param-reassign
        };
    });
    target.parentNode.childNodes.forEach(element => {
        element.classList.remove('rated');
    });
    target.classList.add('rated');
}

function unrate(target) {
    var bookNumber = Number(target.parentElement.parentElement.dataset.book);
    dataObject[bookNumber - 1].rating = 0;
    target.classList.remove('rated');
}

function newBookRating(event) {
    var target = event.target;
    if (target.className === 'star') {
        target.parentNode.childNodes.forEach(element => {
            if (element.className === 'star rated') {
                element.classList.remove('rated');
            }
        });
        target.classList.add('rated');
    }
    else if (target.className === 'star rated') {
        target.classList.remove('rated');
    };
}