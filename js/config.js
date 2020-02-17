var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoid2VpeGluZ25pZSIsImEiOiJjazZqdTZ1MmIwMWZ1M2xwOGcyejZ5M2hmIn0.UTnQ8LMD7rkcL4eTm0iAsg',
    showMarkers: true,
    alignment: 'right',
    title: 'The spread of coronavirus',
    subtitle: 'An objective map',
    byline: 'Weixing Nie, 2/16/2020, Jan.2020 --- Feb.2020, Asia',
    footer: 'References, acknowledgments, footnotes',
    chapters: [
        {
            id: 'The possible origin',
            title: 'The outbreak of Coronavirus',
            image: 'img/Wuhan_market.jpg',
            description: 'An ongoing outbreak of coronavirus disease 2019 (COVID-19) caused by the 2019 novel coronavirus (SARS-CoV-2) started in December 2019. It was first identified in Wuhan, capital of Hubei province in China, after 41 people presented with pneumonia of no clear cause. The "pneumonia of unknown cause" was suspected linking to Huanan Seafood Wholesale Market, which had a thousand stores selling bats, snakes, chickens, and other wild animals without health procation.',
            location: {
                center: [114.25666, 30.62051],
                zoom: 16.41,
                pitch: 56.50,
                bearing: -0.02
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'The spread in China',
            title: 'Coronavirus outbreak in China',
            image: 'img/China.jpg',
            description: 'In just a few weeks, the coronavirus had spread across proviences. The cirtical condition in China had turned more serious and intense than SARS.',
            location: {
                center: [111.03403, 36.56962],
                zoom: 2.86,
                pitch: 3.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Japan',
            title: 'Across the ocean, Coronavirus detected in Japan',
            image: 'img/Japan.jpg',
            description: 'On a cruise ship quarantined near Tokyo, it was reported for the first case of the coronavirus outbreak. So far, there are already 44 or more confirming cases in Japan.',
            location: {
                center: [139.19140, 40.26337],
                zoom: 4.03,
                pitch: 3.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Ginza',
            title: 'One confirmed case in Ginza',
            image: 'img/Ginza.jpg',
            description: 'The patients with positive coronavirus test was once spoted on the railroad station at Ginza in Tokyo. Ginza is one of the crowdest places in the world for tourists, which concerns a lot of people of a futher spread on coronavirus.',
            location: {
                center: [139.73676, 35.75746],
                zoom: 14.92,
                pitch: 60.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};
