class API {
    async obtenerDatos() {
        const total = 30;
        // Obtener datos desde la API
        const datos = await fetch(`https://raw.githubusercontent.com/vierja/geojson_montevideo/master/direcciones_por_barrio/CORDON.geojson`);
        // Retornar datos como JSON
        const respuestaJSON = await datos.json();
        
        return {
            respuestaJSON
        }
    } 
}