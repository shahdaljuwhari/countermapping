var config = {
    style: 'mapbox://styles/shahdjuwhari/cm3f5soyg001m01qxfbbihin9',
    accessToken: 'pk.eyJ1Ijoic2hhaGRqdXdoYXJpIiwiYSI6ImNtMXRoeW1rMDAyZnUybHBybHdmYnRuNDEifQ.Jw0kIKtdpRrRzCfucPlsgw',
    showMarkers: true,
    markerColor: '#000000',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'New York City Flood Risk',
    subtitle: 'Public and Affordable Housing Flood Risk',
    byline: 'By Shahd Al-Juwhari',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec imperdiet tellus. Nunc posuere elit sodales lectus tristique, a fermentum quam efficitur. Nulla euismod lorem id ante aliquam, nec feugiat turpis luctus. Donec eget egestas ex, vel sollicitudin risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent mollis mauris ut mauris volutpat, sed ullamcorper purus consectetur. Mauris a mi dolor. Mauris erat velit, pulvinar sed mauris accumsan, placerat facilisis nisl. Donec magna sapien, placerat ac leo ut, elementum volutpat neque. Duis molestie malesuada tortor sit amet mollis. Vestibulum molestie gravida tincidunt. Aliquam sed massa eu lorem feugiat tincidunt eu non nisi. Aliquam sodales odio quis sapien iaculis, venenatis pretium sem euismod. Mauris sem lacus, vestibulum sed scelerisque id, accumsan a nunc.',
    para2: 'Suspendisse lorem dolor, semper eget neque sed, congue pretium mauris. Integer efficitur ac justo et dapibus. Quisque ut justo nec lorem fringilla pellentesque at sed augue. Nam lobortis ante eu auctor tempus. Proin euismod velit et sagittis efficitur. Vestibulum fringilla libero sed diam porta accumsan. Ut aliquam quam elit, id egestas orci tempus eu. Phasellus vel eros in urna rutrum mattis placerat a magna. Ut a venenatis eros. Etiam at ipsum venenatis dolor tempus egestas. Cras nec iaculis mauris. Nunc volutpat, lacus eu varius sodales, urna arcu venenatis arcu, at imperdiet diam urna sit amet dui. Sed tincidunt tortor nec mi cursus faucibus. Sed faucibus maximus augue, a eleifend orci auctor semper. Mauris nec turpis arcu. Vivamus dictum, lectus nec pulvinar blandit, eros mi pulvinar dolor, vel commodo erat nisl id dolor.',
    footer: 'Source: Red Hook Houses, Wikipedia <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    projection: {
    name: 'albers',
    parallels: [29.5, 45.5] 
},
    chapters: [
    
        {
            id: 'my-story-chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Lower East Side',
            image: 'https://waterfrontalliance.org/wp-content/uploads/2019/10/BPC_esplanade_Sandy2012-e1570842643396.jpeg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.98668, 40.71593],
                zoom: 16.56,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
        {
    id: 'interlude',
    alignment: 'center',
    hidden: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    video: 'images/902-1_902-2364-PD2_preview.mp4',
    location: {
      center: [-73.97615, 40.71901],
      zoom: 14.84,
      pitch: 48,
      bearing: 142.44,
    },
},
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'https://i.ytimg.com/vi/2qZyS3kSiiA/maxresdefault.jpg',
            description: 'The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. Before Hurricane Sandy in 2012, various city reports had outlined the need for increased flood protection, projecting floods as high as 5 feet during storm surges. NYCHA officials responded that they did not anticipate storm surges that strong.',
            location: {
                center: [-74.01228, 40.67792],
                zoom: 16.05,
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'South Beach Staten Island',
            image: 'https://i0.wp.com/www.thecity.nyc/wp-content/uploads/2020/07/8d2bb46630bf37d6a625d742a881461db071_hurricane_sandy_midland_beach-scaled.jpg?fit=1200%2C800&ssl=1',
            description: 'South Beach on Staten Island has become especially vulnerable to flooding, with rising sea levels and intense storms placing this coastal community at risk. During severe weather, floodwaters often spill over onto streets, inundating homes and businesses and leaving lasting impacts on the area. The memory of Hurricane Sandy still lingers, a stark reminder of the need for robust defenses and resilient infrastructure. Residents and local leaders continue to push for improved flood mitigation efforts, aiming to protect South Beach from the worsening effects of climate change.',
            location: {
                center: [-74.07919, 40.59616],
                zoom: 16.25,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Flood Plains',
            alignment: 'fully',
            hidden: false,
            title: 'Closing Remarks',
            image: 'https://media.defense.gov/2024/Oct/07/2003560323/780/780/0/241007-D-CR197-1119.JPG',
            description: 'In conclusion, New York City stands at a critical juncture, facing the escalating challenges of urban flooding. Past events, like Hurricane Sandy, have underscored the urgency of rethinking infrastructure, storm defenses, and climate resilience. As floodwaters increasingly breach the city’s streets and transit systems, New Yorkers are calling for sustainable solutions that go beyond temporary fixes. While resilience and community efforts remain strong, only substantial investment and policy action can truly safeguard New York against the looming threat of more frequent and severe flooding events.',
            location: {
                center: [-73.93643, 40.68746],
                zoom: 14.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
