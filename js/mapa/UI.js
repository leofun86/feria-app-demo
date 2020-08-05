class UI {
    constructor() {
        // Instanciar la API
        this.api = new API();

        // Crear los markers con layerGroup
        this.markers = new L.LayerGroup();

        // Iniciar el mapa
         this.mapa = this.inicializarMapa();
    }
    inicializarMapa() {
        this.resetMapa();
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([-34.90243,-56.1773248,20], 19);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
            'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        this.api.obtenerDatos()
            .then(datos => {
                console.log(datos.respuestaJSON.fearures);
            });
        return map;
    }
    mostrarEstablecimientos(busqueda) {
        this.resetMapa();
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJSON;

                const busqueda_deletreada = busqueda.split('');
                let calle='',num ='';
                busqueda_deletreada.forEach(data => {
                    if (parseInt(data)) { 
                        num+=data;
                     } else  {
                        if (data === 'á' || data === 'Á') {
                            calle+='a'.toUpperCase();
                        } else if (data === 'é' || data === 'É') {
                            calle+='e'.toUpperCase();
                        } else if (data === 'í' || data === 'Í') {
                            calle+='i'.toUpperCase();
                        } else if (data === 'ó' || data === 'Ó') {
                            calle+='o'.toUpperCase();
                        } else if (data === 'ú' || data === 'Ú') {
                            calle+='u'.toUpperCase();
                        } else {
                            calle+=data.toUpperCase();
                        }
                        
                     }
                });
                calle = calle.trim();
                num = Number(num);
                console.log(calle);
                const filtrado = resultado.features.filter(data => data.properties.calle.indexOf(calle)!==-1).filter(data => data.properties.num_puerta === num);
                if (filtrado.length !== 0) {
                    const latitud = filtrado[0].geometry.coordinates[0];
                    const longitud = filtrado[0].geometry.coordinates[1];
                    console.log(latitud);
                    console.log(longitud);
                    const map = L.map('mapa').setView([longitud,latitud], 19);
                    L.tileLayer(
                        'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
                    L.geoJson(filtrado).addTo(map);
                    return map;
                } else {
                    this.inicializarMapa();
                }
                // Ejecutar la función para mostrar los pines
                    //this.mostrarPines(resultado);
            })
            
    }
    mostrarPines(datos) {
        // Limpiar los markers antes hacer el llamado de datos
        this.markers.clearLayers();
        // Recorrer los establecimientos
        datos.forEach(dato => {
            // Destructuring
            const { latitude, longitude, calle, regular, premium } = dato;

            // Crear POPUP
            const opcionesPopUp = L.popup()
                .setContent(`
                    <p>Calle: ${calle}</p>
                    <p><b>Precio Regular:<b/> $ ${regular}</p>
                    <p><b>Precio Premium:<b/> $ ${premium}</p>
                `)

            // Agregar el PIN
            const marker = new L.marker(
                [
                    parseFloat(latitude),
                    parseFloat(longitude)
                ],
                {
                    icon: L.icon.glyph({
                        prefix: 'glyphicon',
                        glyph: 'step-forward',
                    })
                }
            ).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }
    // Buscador
    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos()
            .then(datos => {
                // Obtener los datos
                const resultados = datos.respuestaJSON.results;

                // Enviar JSON y la búsqueda para el filtrado
                this.filtrarSugerencias(resultados, busqueda)
            })
    };    
    // Filtra las sugerencias en base al input
    filtrarSugerencias(resultados, busqueda) {
        // Filtrar con .filter
        const filtro = resultados.filter(dato => dato.calle.indexOf(busqueda) !== -1 );

        // Mostrar los pines
        this.mostrarPines(filtro);
    }
    resetMapa() {
        document.getElementById('contenedor-mapa').innerHTML='<div class="row"><div class="col-12"><div id="mapa" style="transform:scale(1);height:200px!important;"></div></div></div>';
    }
}