const contacts =[
    {
        id:1,
        name:'Serena',
        last_time_conected:'16 de octubre de 2022',
        is_connected: false,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "Hola Sere!",
            timestamp: '16:17',
            sent: true     
            },
            {
            id: 2,
            author: 'Serena',
            message: "Hola facu, como estas?",
            timestamp: '16:17',
            sent: false       
            }
        ]
    
    },
    {
        id:2,
        name:'Camila',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true       
            }
        ]
    },
    {
        id:3,
        name:'Lorena',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'Lore',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: false      
            }
        ]
    },
    {
        id:4,
        name:'Lionel',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true       
            }
        ]
    },
    {
        id:5,
        name:'Caro',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true       
            }
        ]
    },
    {
        id:6,
        name:'Alex',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true      
            }
        ]
    },
    {
        id:7,
        name:'Santino',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true       
            }
        ]
    },
    {
        id:8,
        name:'Gonzalo',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true     
            }
        ]
    },
    {
        id:9,
        name:'Lola',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true     
            }
        ]
    },
    {
        id:10,
        name:'Maite',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true 
            }
        ]
    },
    {
        id:11,
        name:'Lucho',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true 
            }
        ]
    },
    {
        id:12,
        name:'Valen',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true
            }
        ]
    },
    {
        id:13,
        name:'Fausto',
        last_time_conected:'now',
        is_connected: true,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true      
            }
        ]
    },
    {
        id:14,
        name:'Agustin',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true  
            }
        ]
    },
    {
        id:15,
        name:'Victoria',
        last_time_conected:'now',
        is_connected: false,
        profile_img:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        state:'Tu espera ese dia y cuando llegue ese dia, ese sera el dia',
        messages:[
            {
            id: 1,
            author: 'YO',
            message: "hola, ¿como va?",
            timestamp: '16:17',
            sent: true      
            }
        ]
    },


]

export default contacts