const nav = document.querySelector('nav');
const toggle = document.querySelector('.toggle');
const menu_list = document.querySelector('ul');

document.addEventListener('scroll', ()=>{
    if ( window.scrollY > 100 ) {
        nav.style.backgroundColor = '#29323c';
    } else {
        nav.style.backgroundColor = 'rgba(31, 30, 30, 0.24)';
    }
});

toggle.addEventListener('click', () =>{
    if (toggle.classList.contains('activate')) {
        toggle.classList.remove('activate');
        menu_list.classList.remove('activate');
    } else {
        toggle.classList.add('activate');
        menu_list.classList.add('activate');
    }
});