const contacts =[
    {
        id:1,
        name:'Serena',
        last_time_conected:'16 de octubre de 2022',
        is_connected: false,
        profile_img:'https://static.vecteezy.com/system/resources/thumbnails/050/035/558/small_2x/cute-minnie-mouse-free-vector.jpg',
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
        profile_img:'https://i.pinimg.com/564x/71/f6/18/71f618014aef162abdcd7245bf72dc3f.jpg',
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
        profile_img:'https://i.pinimg.com/474x/9f/de/91/9fde913b183611ffa67d5969ae62abce.jpg',
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
        profile_img:'https://i.ebayimg.com/images/g/SAsAAOSwTNBd2EAY/s-l1200.jpg',
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
        profile_img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aKgv9C1q5LnMswiLtn--YP5f8p6Kb_jmDw&s',
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
        profile_img:'https://wallpapers.com/images/featured/imagenes-de-homer-simpson-kj3h1n6hzcpwg904.jpg',
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
        profile_img:'https://thumbs.dreamstime.com/b/bart-simpson-caricatura-vektor-formatos-png-jpg-262242958.jpg',
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
        profile_img:'https://i.redd.it/57i4fukctawd1.png',
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