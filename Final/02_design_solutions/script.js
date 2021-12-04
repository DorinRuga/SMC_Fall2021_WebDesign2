let toggleMenu = document.getElementById('togglemenu');
let navlist = document.getElementById('navlist')

toggleMenu.addEventListener('click', () => {
    navlist.classlist.toggle('active');
})