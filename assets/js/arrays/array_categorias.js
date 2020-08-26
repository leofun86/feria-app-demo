const categoriasArray = [
    {
        icon: 'fas fa-paw',
        txt: 'Plantas y Animales',
        img: 'assets/img/categorias/plantas_animales.jpg',
        class: 'plantas_animales',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-utensils',
        txt: 'Alimentos y Bebidas',
        img: 'assets/img/categorias/alimentos_bebidas.jpg',
        class: 'alimentos_bebidas',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-sink',
        txt: 'Baño y Cocina',
        img: 'assets/img/categorias/banio_cocina.jpg',
        class: 'banio_cocina',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-gamepad',
        txt: 'Electrónica y Entretenimiento',
        img: 'assets/img/categorias/electronica_entretenimiento.jpg',
        class: 'electronica_entretenimiento',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-tshirt',
        txt: 'Vestimenta',
        img: 'assets/img/categorias/vestimenta.jpg',
        class: 'vestimenta',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-palette',
        txt: 'Anticuarios',
        img: 'assets/img/categorias/anticuarios.jpg',
        class: 'anticuarios',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-book',
        txt: 'Libros y Revistas',
        img: 'assets/img/categorias/libros_revistas.jpg',
        class: 'libros_revistas',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-democrat',
        txt: 'Bazar',
        img: 'assets/img/categorias/bazar.jpg',
        class: 'bazar',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-paint-roller',
        txt: 'Bricolaje',
        img: 'assets/img/categorias/bricolaje.jpg',
        class: 'bricolaje',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-paperclip',
        txt: 'Papelería',
        img: 'assets/img/categorias/papeleria.jpg',
        class: 'papeleria',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-bicycle',
        txt: 'Repuestos',
        img: 'assets/img/categorias/repuestos.jpg',
        class: 'repuestos',
        data_target: '#modal_subcategorias',
    },
    {
        icon: 'fas fa-gifts',
        txt: 'Mercado de Pulgas',
        img: 'assets/img/categorias/mercado_pulgas.jpg',
        class: 'mercado_pulgas',
        data_target: '#modal_subcategorias',
    },
];

const subcategoriasArray = [
    {
        ref: 'plantas_animales',
        titulo: 'Plantas y Animales',
        subs: [
            {
                titulo:'PLANTAS',
                subs: ['Jardinería', 'Florería'],
            },
            {
                titulo:'ANIMALES',
                subs: ['Peces y Acuarios', 'Mascotas', 'Peces y Alimento'],
            },
        ]
    },
    {
        ref: 'alimentos_bebidas',
        titulo: 'Alimentos y Bebidas',
        subs: [
            {
                titulo:'ALIMENTOS',
                subs: ['Fruta y Verdura', 'Granja', 'Pescadería', 'Frutos secos', 'Panificados', 'Pastas'],
            },
            {
                titulo:'BEBIDAS',
                subs: ['Licores', 'Vinos', 'Whisky', 'Cerveza', 'Otros'],
            },
        ]
    },
    {
        ref: 'banio_cocina',
        titulo: 'Baño y Cocina',
        subs: ['Desodorantes de ambiente', 'Lavandinas', 'Detergentes', 'Insecticidas', 'Cuidado de ropa', 'Accesorios de hogar', 'Limpieza de hogar'],
    },
    {
        ref: 'electronica_entretenimiento',
        titulo: 'Electrónica y Entretenimiento',
        subs: [
            {
                titulo:'ELECTRÓNICA',
                subs: ['Accesorios para celulares', 'Cables', 'Almacenamiento'],
            },
            {
                titulo:'ENTRETENIMIENTO',
                subs: ['Juegos de mesa', 'Juegos mentales', 'Videojuegos', 'Deportes', 'Coleccionables'],
            },
        ]
    },
    {
        ref: 'vestimenta',
        titulo: 'Vestimenta',
        subs: [
            {
                titulo:'ROPA',
                subs: ['Ropa deportiva', 'Ropa artesanal', 'Ropa usada', 'Ropa masculina', 'Ropa femenina', 'Ropa unisex', 'Accesorios'],
            },
            {
                titulo:'CALZADO',
                subs: ['Calzado deportivo', 'Zapatos', 'Otros'],
            },
        ]
    },
    {
        ref: 'anticuarios',
        titulo: 'Anticuarios',
        subs: ['Cristalería', 'Muebles', 'Decoración', 'Numismática', 'Fotografía y Documentos', 'Filatelia', 'Colecciones', 'Joyería', 'Accesorios', 'Coleccionables'],
    },
    {
        ref: 'libros_revistas',
        titulo: 'Libros y Revistas',
        subs: [
            {
                titulo:'LIBROS',
                subs: ['Libros infantiles', 'Libros de estudio', 'Novelas', 'Poesía', 'Electrónica / Informática', 'Cocina', 'Best seller'],
            },
            {
                titulo:'REVISTAS',
                subs: ['Ciencia', 'Cocina', 'Historia', 'Magazine'],
            },
        ]
    },
    {
        ref: 'bazar',
        titulo: 'Bazar',
        subs: ['Cristalería', 'Luminaria', 'Accesorios de cocina', 'Decoración', 'Artículos para el hogar'],
    },
    {
        ref: 'bricolaje',
        titulo: 'Bricolaje',
        subs: ['Jardinería', 'Camping', 'Pesca', 'Piezas', 'Herramientas', 'Herramientas', 'Pinturería', 'Artículos sanitarios'],
    },
    {
        ref: 'papeleria',
        titulo: 'Papelería',
        subs: ['Artículos escolares', 'Artículos de oficina'],
    },
    {
        ref: 'repuestos',
        titulo: 'Repuestos',
        subs: ['Autos', 'Motos', 'Bicicletas'],
    },
    {
        ref: 'mercado_pulgas',
        titulo: 'Mercado de Pulgas',
        subs: ['Antigüedades', 'Coleccionables', 'Mercería', 'Piedras', 'Lentes', 'Electrodomésticos', 'Ferretería', 'Herrería', 'Carpintería', 'Cerrajería', 'Talabartería', 'Mates y Accesorios'],
    },
];