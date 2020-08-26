const favicon = document.getElementById('icono-menu');
const menu = document.getElementById('menu');
const galeria_puesto = document.getElementById('galeria-puesto');
const img_fullscreen = document.getElementById('container-img-sullscreen');
const contenedor_total = document.getElementById('contenedor-total');
let giroBool = false;

const menuArray = [
    {
        href:'index.html',
        i:'fas fa-home',
        txt:'Feria tristán Narvaja',
    },
    {
        href:'#',
        i:'fas fa-user',
        txt:'LOGIN',
    },
    {
        href:'#',
        i:'fas fa-question',
        txt:'Info',
    },
    {
        href:'#',
        i:'fas fa-landmark',
        txt:'Wiki-feria',
    },
    {
        href:'#',
        i:'fas fa-bus-alt',
        txt:'Paseo cultural Tristán Narvaja',
    },
    {
        href:'#',
        i:'fas fa-cloud-download-alt',
        txt:'Descargas',
    },

];

document.addEventListener('DOMContentLoaded', ()=>{

    const fragment = document.createDocumentFragment();
    menuArray.forEach(menu => {
        if (menu.href === 'index.html') {
            const h4 = document.createElement('h4');
            const link = document.createElement('a');
            const i = document.createElement('i');
            i.setAttribute('class', menu.i);
            link.setAttribute('href', menu.href);
            link.innerHTML=`<i class="${menu.i}"></i>&nbsp;${menu.txt}`;
            h4.appendChild(link);
            fragment.appendChild(h4);
        } else {
            const link = document.createElement('a');
            const i = document.createElement('i');
            const separador = document.createElement('div');
            separador.style.backgroundColor='white';
            separador.style.width='100%;';
            separador.style.height='1px';
            separador.style.margin='5px 0px';
            i.setAttribute('class', menu.i);
            link.setAttribute('href', menu.href);
            link.innerHTML=`<i class="${menu.i}"></i>&nbsp;${menu.txt}`;
            link.appendChild(separador);
            fragment.appendChild(link);
        }
    });
    menu.appendChild(fragment);
})



favicon.addEventListener('click', ()=> {
    if (!giroBool) {
        favicon.classList.remove('fav-giro-out');
        favicon.classList.add('fav-giro-in');
        menu.style.display='block';
        menu.classList.remove('menu-out');
        menu.classList.add('menu-in');
        giroBool=true;
    } else {
        favicon.classList.remove('fav-giro-in');
        favicon.classList.add('fav-giro-out');
        menu.classList.remove('menu-in');
        menu.classList.add('menu-out');
        setTimeout(()=>{ menu.style.display='none'; }, 1500);
        giroBool=false;
    }  
});