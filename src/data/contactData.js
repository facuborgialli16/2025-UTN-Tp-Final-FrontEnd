const contacts =[
    {
        id:1,
        name:'Serena',
        last_time_conected:'16 de octubre de 2022',
        is_connected: false,
        profile_img:'https://static.vecteezy.com/system/resources/previews/002/740/762/non_2x/cute-woman-with-black-hair-free-vector.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "Hola Sere!",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            },
            {
            id: 2,
            author: 'Serena',
            message: "Hola facu, como estas?",
            timestamp: '16:17',
            sent: false       // vos lo enviaste
            }
        ]
    
    },
    {
        id:2,
        name:'Camila',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://img.freepik.com/vector-gratis/mujer-cabello-largo-oscuro_1308-176666.jpg?t=st=1759282038~exp=1759285638~hmac=61e8edec8cbe0ed1600190cd0409f727eeefaf1fe0c7da34bb146a64a3f9d8b1',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien Cami?",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:3,
        name:'Lorena',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://st4.depositphotos.com/8230070/22279/v/450/depositphotos_222797476-stock-illustration-face-expression-beautiful-woman-dark.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'Lore',
            message: "Lavaste los platos?",
            timestamp: '16:17',
            sent: false       // vos lo enviaste
            }
        ]
    },
    {
        id:4,
        name:'Lionel',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://img.freepik.com/vector-premium/retrato-hombre-pelo-rizado-avatar-redes-sociales-vector-moda-belleza_55610-7317.jpg?semt=ais_hybrid&w=740&q=80',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien pa?",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            },
            {
            id: 2,
            author: 'Lionel',
            message: "Si hijo todo bien y vos?",
            timestamp: '16:17',
            sent: false       // vos lo enviaste
            }
        ]
    },
    {
        id:5,
        name:'Caro',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://us.123rf.com/450wm/grgroup/grgroup2009/grgroup200902552/156012223-dise%C3%B1o-de-cabeza-de-dibujos-animados-de-mujer-de-cabello-negro-ni%C3%B1a-persona-femenina-personas.jpg?ver=6',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:6,
        name:'Alex',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://img.freepik.com/vector-premium/redhaired-girl-smiling-at-robin-in-hands_1308-183515.jpg?semt=ais_hybrid&w=740&q=80',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:7,
        name:'Santino',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://img.freepik.com/vector-premium/hombre-dibujos-animados-cabello-negro-fondo-blanco_481747-87631.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:8,
        name:'Gonzalo',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://img.freepik.com/vector-gratis/retrato-nino-cabello-rubio-ojos-azules_1308-157023.jpg                       ',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:9,
        name:'Lola',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://img.freepik.com/vector-gratis/retrato-vectorial-chica-rubia-sonriente_1308-165648.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:10,
        name:'Maite',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://st4.depositphotos.com/8230070/23108/v/450/depositphotos_231086748-stock-illustration-face-expression-woman-blond-hair.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:11,
        name:'Lucho',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://img.freepik.com/vector-premium/dibujo-caracter-japones-personaje-japones-el_646696-3511.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:12,
        name:'Valen',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://img.freepik.com/vector-premium/personaje-dibujos-animados-sonriente-pelo-negro_684058-729.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:13,
        name:'Fausto',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://img.freepik.com/vector-gratis/chico-rubio-capucha-azul_1308-175828.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:14,
        name:'Agustin',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://img.freepik.com/vector-gratis/lindo-chico-pelo-rizado-gafas-cabeza_1308-135137.jpg',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },
    {
        id:15,
        name:'Victoria',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://img.freepik.com/vector-gratis/ilustracion-chica-alegre-cabello-rizado_1308-164185.jpg?semt=ais_hybrid&w=740&q=80',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola todo bien",
            timestamp: '16:17',
            sent: true       // vos lo enviaste
            }
        ]
    },


]

export default contacts