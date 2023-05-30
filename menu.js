window.addEventListener("load", function(){

const hamburgerMenu = document.getElementById('hamburger-menu');
const desplegarMenu = document.getElementById('main-menu');

hamburgerMenu.addEventListener('click', ()=>{
    desplegarMenu.classList.toggle('main_menu_show');
});

})