const ui = new UI();

document.addEventListener('DOMContentLoaded', ()=>{
    
});

// Habilitar búsqueda de establecimientos
const btnMostrarMapa = document.querySelector('#btnMapa');

btnMostrarMapa.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(document.getElementById('calle-puesto').textContent);
    ui.mostrarEstablecimientos(document.getElementById('calle-puesto').textContent);
});