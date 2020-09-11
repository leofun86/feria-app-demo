const menuArray = [
    {
        txt:'Inicio',
        href:'index.html',
    }, 
    {
        txt:'Cómo llegar',
        href:'como_llegar.html',
    },
    {
        txt:'Paseo de la feria',
        subs: [
            {
                txt:'Gastronomía',
                subs: [
                    {
                        txt:'Restaurantes',
                        href:'restaurantes.html',
                    },
                    {
                        txt:'Comida de paso',
                        href:'comida_de_paso.html'
                    }
                ],
            },
            {
                txt:'Zona artística',
                subs: [
                    {
                        txt:'Música en vivo',
                        href:'musica_en_vivo.html',
                    },
                    {
                        txt:'Artistas callejeros',
                        href:'artitas_callejeros.html',
                    }
                ],
            }
        ]
    },
    {
        txt:'Wiki-Feria',
        subs: [
            {
                txt:'Origen de la feria',
                href:'origen_feria.html',
            },
            {
                txt:'Historias de la feria',
                href:'historias_feria.html',
            },
            {
                txt:'Descargas',
                href:'descargas.html',
            }
        ]
    },
    {
        txt:'FAQs',
        href:'faqs.html',
    },
    {
        iconClass:'fas fa-user',
        subs: [
            {
                txt:'Panel usuario',
                iconClass:'fas fa-user-circle',
                href:'panel_usuario.html',
            },
            {
                txt:'Favoritos',
                iconClass:'fas fa-heart',
                href:'favoritos.html',
            },
            {
                txt:'Salir',
                iconClass:'fas fa-sign-out-alt',
                href:'#'
            }
        ]
    },
];