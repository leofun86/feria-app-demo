const presentacion = document.getElementById('presentacion');
const descripcion = document.getElementById('descripcion');
const btnInfo = document.getElementById('info');
const infoPuesto = document.getElementById('info-puesto');
const btnMapa = document.getElementById('btnMapa');
const mapa = document.getElementById('mapa');
let boolInfo = false;
let boolMapa = false;

let staff = [
    {feriante_1: 'Federico Dieste'},
    
]

if (staff.length != 1) {
    presentacion.textContent='¿Quienes somos?';
    descripcion.textContent='¿Qué hacemos?';
} else {
    presentacion.textContent='¿Quién soy?';
    descripcion.textContent='¿Qué hago?';
}

btnInfo.addEventListener('click', ()=>{
    if (!boolInfo) {
        mapa.style.display='none';
        infoPuesto.style.display='block';
        boolInfo=true;
    } else {
        infoPuesto.style.display='none';
        boolInfo=false;
    }
})

btnMapa.addEventListener('click', ()=>{
    if (!boolMapa) {
        infoPuesto.style.display='none';
        mapa.style.display='block';
        boolMapa=true;
    } else {
        mapa.style.display='none';
        boolMapa=false;
    }
});

galeria_puesto.addEventListener('click', (e)=>{
    if (e.target.className === 'fas fa-expand') {
        img_fullscreen.querySelector('img').setAttribute('src', e.target.parentElement.querySelector('.img-fluid').src);
        img_fullscreen.style.display='block';
        contenedor_total.style.filter='blur(4px)';
        document.getElementById('close-img-fullscreen').addEventListener('click', ()=>{
            img_fullscreen.style.display='none';
            contenedor_total.style.filter='blur(0px)';
        });
    }
})

