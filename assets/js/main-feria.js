const index_categorias = document.getElementById('index_categorias');
const caja_slide = document.getElementById('slide-banner-feria');
const caja_subcategorias = document.getElementById('modal_subcategorias');
//const caja_menu = document.getElementById('menu_feria');
const caja_menu_feria = document.getElementById('cajaMenuVer');
const contenedor_paginas = document.getElementById('contenedor_paginas');
const btnMainOnOff = document.getElementById('btnView');
const btnFullScreen = document.getElementById('btnFullScreen');
const btnMainInfoOn = document.getElementById('btnInfoOn');
const btnMainInfoOff = document.getElementById('btnInfoOff');
let stateView = false;
const menuCaja1 = document.getElementById('menu-caja-1');
const menuCaja2 = document.getElementById('menu-caja-2');
const menuCaja3 = document.getElementById('menu-caja-3');



document.addEventListener('DOMContentLoaded', ()=>{
    videoPlay();
})

function videoPlay () {
    const iconView = document.querySelector('#btnView i');
    btnMainOnOff.addEventListener('click', (e)=>{
        const h1 = document.querySelector('#mainFeria h1');
		const h2 = document.querySelector('#mainFeria h2');
        const logo1 = document.querySelector('#logoMainCenter');
        const logo2 = document.querySelector('#logoMainLeft');
        const a = document.querySelector('#mainFeria a');
        const div = document.querySelector('#mainFeria > div');
        if (!stateView) {
            $(h1).fadeToggle();
			$(h2).fadeToggle();
            $(logo1).fadeToggle();
            setTimeout(()=>{ $(logo2).fadeToggle(); }, 500);
            $(a).fadeToggle();
            //$(div).fadeToggle();
            iconView.removeAttribute('class');
            iconView.setAttribute('class', 'fas fa-eye-slash');
            stateView=true;
        } else {
            $(h1).fadeToggle();
			$(h2).fadeToggle();
            $(logo1).fadeToggle();
            $(logo2).fadeToggle();
			$(a).fadeToggle();
            //$(div).fadeToggle();
            iconView.removeAttribute('class');
            iconView.setAttribute('class', 'fas fa-eye');
            stateView=false;
        }        
    });
}

btnMainInfoOn.addEventListener('click', ()=>{
    $('#mainInfo').fadeToggle('slow');
});
btnMainInfoOff.addEventListener('click', ()=>{
    $('#mainInfo').fadeToggle('slow');
});

