const favicon = document.getElementById('icono-menu');
const menu = document.getElementById('menu');
const galeria_puesto = document.getElementById('galeria-puesto');
const img_fullscreen = document.getElementById('container-img-sullscreen');
const contenedor_total = document.getElementById('contenedor-total');
let giroBool = false;

favicon.addEventListener('click', ()=> {
    if (!giroBool) {
        favicon.classList.remove('fav-giro-out');
        favicon.classList.add('fav-giro-in');
        menu.classList.remove('menu-out');
        menu.classList.add('menu-in');
        giroBool=true;
    } else {
        favicon.classList.remove('fav-giro-in');
        favicon.classList.add('fav-giro-out');
        menu.classList.remove('menu-in');
        menu.classList.add('menu-out');
        giroBool=false;
    }  
});