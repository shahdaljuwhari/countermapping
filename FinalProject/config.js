var config = {
    style: 'mapbox://styles/shahdjuwhari/cm4ep656h00hl01rw1qglg4tn',
    accessToken: 'pk.eyJ1Ijoic2hhaGRqdXdoYXJpIiwiYSI6ImNtMXRoeW1rMDAyZnUybHBybHdmYnRuNDEifQ.Jw0kIKtdpRrRzCfucPlsgw',
    showMarkers: false,
    markerColor: '#000000',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Mapping the Diwan Architecture of Nablus',
    subtitle: 'A Multimedia Approach to Historic Preservation',
    byline: 'By: Shahd Al-Juwhari',
    //para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec imperdiet tellus. Nunc posuere elit sodales lectus tristique, a fermentum quam efficitur. Nulla euismod lorem id ante aliquam, nec feugiat turpis luctus. Donec eget egestas ex, vel sollicitudin risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis mauris ut mauris volutpat, sed ullamcorper purus consectetur. Mauris a mi dolor. Mauris erat velit, pulvinar sed mauris accumsan, placerat facilisis nisl. Donec magna sapien, placerat ac leo ut, elementum volutpat neque. Duis molestie malesuada tortor sit amet mollis. Vestibulum molestie gravida tincidunt. Aliquam sed massa eu lorem feugiat tincidunt eu non nisi. Aliquam sodales odio quis sapien iaculis, venenatis pretium sem euismod. Mauris sem lacus, vestibulum sed scelerisque id, accumsan a nunc.',
    //para2: 'Suspendisse lorem dolor, semper eget neque sed, congue pretium mauris. Integer efficitur ac justo et dapibus. Quisque ut justo nec lorem fringilla pellentesque at sed augue. Nam lobortis ante eu auctor tempus. Proin euismod velit et sagittis efficitur. Vestibulum fringilla libero sed diam porta accumsan. Ut aliquam quam elit, id egestas orci tempus eu. Phasellus vel eros in urna rutrum mattis placerat a magna. Ut a venenatis eros. Etiam at ipsum venenatis dolor tempus egestas. Cras nec iaculis mauris. Nunc volutpat, lacus eu varius sodales, urna arcu venenatis arcu, at imperdiet diam urna sit amet dui. Sed tincidunt tortor nec mi cursus faucibus. Sed faucibus maximus augue, a eleifend orci auctor semper. Mauris nec turpis arcu. Vivamus dictum, lectus nec pulvinar blandit, eros mi pulvinar dolor, vel commodo erat nisl id dolor.',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    projection: {
    name: 'albers',
    parallels: [29.5, 45.5] 
},
    chapters: [
    
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            showMarkers: false,
            title: 'Nablus, Palestine',
            image: 'https://atlastours.net/wp-content/uploads/2022/06/nablus_view-1.jpg',
            description: "Nablus, with over 5,000 years of history, has been a center of cultural and political significance in Palestine, shaped by numerous civilizations, including the Canaanites, Romans, Byzantines, and Ottomans. The Ottoman era saw significant architectural development, much of which defines Nablus's historic landscape today. In the 19th century, Nablus thrived as a center for soap manufacturing and trade, later enduring colonial rule under the British, Jordanian governance post-1948, and Israeli occupation since 1967. While now under partial Palestinian administrative control, the city's heritage faces ongoing challenges from Israeli occupation, including destruction and appropriation of cultural landmarks, undermining efforts to preserve its rich architectural legacy and cultural identity.",
            location: {
                center: [35.26102, 32.22186],
                zoom: 14.04,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
 //       {
 //   id: 'interlude',
 //   alignment: 'center',
 //   hidden: false,
 //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
 //   location: {
 //     center: [35.25873, 32.22178],
 //     zoom: 18.05,
 //     pitch: 48,
 //     bearing: 0,
//    },
//},
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'The Old City of Nablus',
            image: 'images/Picture1.jpg',
            description: 'The Old City, also known as "The Open Museum", is the historic center of Nablus, and it is characterized by its tightly clustered buildings, its unique limestone material, narrow pathways, ancient marketplaces, and its numerous Archeological sites. It was destroyed and military targeted several times from the occupation. The topic of preserving heritage under military occupation turned into a form of protecting the collective identity.',
            location: {
                center: [35.25834, 32.21985],
                zoom: 16.5,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            showMarkers: true,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Diwan Architecture',
            image: 'images/Diwan.jpg',
            description: 'A family’s Diwan in Nablus is a social concept that developed from the society’s desire to practice social and cultural activities in their communities. It reflects the detail and nature of relationships of Nablus and Palestinian communities. Diwan architecture is a physical structure that translates this relationship into space as it is one of the primary locations where these social activities are practiced. Diwans served as meeting spaces for extended families, places for communal gatherings, and hubs for social dialogue.',
            showMarkers: true,
            location: {
                center: [35.25834, 32.21985],
                zoom: 17,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
        ],
            onChapterExit: [
        ]
        },
        {
            id: 'chapter-4',
            alignment: 'right',
            hidden: false,
            title: 'Approximate Diwan Locations',
            //image: 'images/Diwan.jpg',
            description: 'Streets where Diwan structures are located were geocoded to identify their approximate locations, according to the The Association of Family Diwans of the Homes of Nablus, a community organization that documents current Diwan locations for all famillies in Nablus.',
            location: {
                center: [35.25914, 32.22166],
                zoom: 14.25,
                pitch: 45,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
            layer: 'diwan-layer', // Layer ID for your tileset
            opacity: 1,
        }
        ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            title: 'Points of Interest',
            //image: 'images/Diwan2.jpg',
            description: 'Important landmarks and services such as archeological sites, banks, restaurants, pharmacies, schools, museums, places of worship, and medical facilities were located to observe the relationship between Diwan structures and Points of Interest.',
            location: {
                center: [35.25914, 32.22166],
                zoom: 15,
                pitch: 45,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            {
            layer: 'poi-layer', // Reference to the new layer
            opacity: 1,
        }
        ],
            onChapterExit: [
        ]
        },
        {
            id: 'chapter-6',
            alignment: 'right',
            hidden: false,
            title: 'Analysis',
            //image: 'images/Diwan2.jpg',
            description: "Diwans in Nablus are strategically located near essential services and landmarks, such as schools, banks, places of worship, and archaeological sites, often within areas of high population concentration. This proximity ensures that diwans are well-serviced and deeply integrated into the fabric of the community, serving as hubs of social, cultural, and familial interaction. Their accessibility and centrality underscore their significance as vibrant spaces for collective gatherings and cultural exchange. Preserving diwans is not only crucial for safeguarding Nablus's architectural heritage but also for maintaining the social cohesion and community identity they foster.",
            location: {
                center: [35.25822, 32.22116],
                zoom: 18,
                pitch: 45,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {
            layer: 'poi-layer',
            opacity: 0
        },
        {
            layer: 'diwan-layer', // Fade out the Diwan layer
            opacity: 0
        }
        ]
        },
        {
            id: 'chapter-7',
            alignment: 'fully',
            hidden: false,
            title: 'Closing Remarks',
            //image: 'images/Diwan2.jpg',
            description: 'The preservation of diwan architecture in Nablus is necessary for maintaining the city’s historical and cultural heritage. These structures have served as communal gathering spaces for extended families for centuries, and documenting their purpose and history is an integral part of preserving Nablus’s identity and culture. Diwan structures are inherently social spaces, reflecting the social structure of the lives of extended families and neighborhoods. Preserving diwans supports community cohesion by revitalizing spaces where families traditionally gather.',
            location: {
                center: [35.25822, 32.22116],
                zoom: 17,
                pitch: 45,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
