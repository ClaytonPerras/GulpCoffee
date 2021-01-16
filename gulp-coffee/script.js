const menuItem = document.querySelectorAll('.menu-item');

function removeActiveClasses() {
    menuItem.forEach(item => {
        item.classList.remove('active');
    });
}

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClasses();
        item.classList.add('active');
    });
});