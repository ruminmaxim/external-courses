document.querySelector('.menu').addEventListener('mouseover', itemHover);
document.querySelector('.menu').addEventListener('mouseout', itemNormal);
document.querySelector('.menu_header').addEventListener('click', menuClick);

function itemHover(event) {
    var target = event.target;
    if (event.target.classList.contains('menu_header')) {
        target.classList.add('menu_header_hover_toogle');
    }
    if (event.target.tagName == 'LI') {
        target.classList.add('menu_li_hover_toogle');
        console.log(event.target);
    }
}

function itemNormal(event) {
    var target = event.target;
    if (event.target.classList.contains('menu_header')) {
        target.classList.remove('menu_header_hover_toogle');
    }
    if (event.target.tagName == 'LI') {
        target.classList.remove('menu_li_hover_toogle');
        console.log(event.target);
    }
}

function menuClick() {
    document.querySelector('.menu_list').classList.toggle("menu_show_toogle");
}
