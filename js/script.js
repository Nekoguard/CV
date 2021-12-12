const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');

menuIcon.addEventListener('click', (e) => {
    if (!menuIcon.classList.contains('active')) {
        openMenu();
    } else if (menuIcon.classList.contains('active')){
        closeMenu();
    }
});

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            closeMenu();
        }
    })
})

function openMenu() {
    menuIcon.classList.add('active');
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuIcon.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = '';
}
