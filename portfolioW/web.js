 const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scroll > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('navlist');

menu.onclick = () => {
    menu.classList.toggle('click')
    menu.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}