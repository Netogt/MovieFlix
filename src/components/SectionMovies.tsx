import { useRef, useState } from "react";
import Movie from "./Movie";
import "../css/SectionMovies.css";

export default function SectionMovies() {
    const [movies, setMovies] = useState(fakeResponse);
    const listMv = useRef(null)
    const moveScroll = (direction: string): void => {
        if (!listMv.current) return

        const container: HTMLUListElement = listMv.current;
        container.scrollBy({
            left: direction == "right" ? 1000 : -1000, 
            behavior: 'smooth'
        })
    }
    return (
        <section className="SectionMovies">
            <h2>Filmes</h2>
            <ul className="movieList" >
                <button className="buttonLeft"onClick={() => moveScroll("left")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
                    </svg>
                </button>
                <div ref={listMv}>
                    {
                        movies.map(movie => <Movie key={movie.id} movie={movie} />)
                    }
                </div>
                <button className="buttonRight" onClick={() => moveScroll("right")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                    </svg>
                </button>
            </ul>
        </section>
    )
}

const fakeResponse = [
    {
        "backdrop_path": "/nA0RDmSDqpN5tLun4sCqdPekObD.jpg",
        "id": 592831,
        "title": "Megalopolis",
        "original_title": "Megalopolis",
        "overview": "Genius artist Cesar Catilina seeks to leap the City of New Rome into a utopian, idealistic future, while his opposition, Mayor Franklyn Cicero, remains committed to a regressive status quo, perpetuating greed, special interests, and partisan warfare. Torn between them is socialite Julia Cicero, the mayor’s daughter, whose love for Cesar has divided her loyalties, forcing her to discover what she truly believes humanity deserves.",
        "poster_path": "/8Sok3HNA3r1GHnK2lCytHyBz1A.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            878,
            18
        ],
        "popularity": 104.831,
        "release_date": "2024-09-25",
        "video": false,
        "vote_average": 5.6,
        "vote_count": 397
    },
    {
        "backdrop_path": "/8mjYwWT50GkRrrRdyHzJorfEfcl.jpg",
        "id": 558449,
        "title": "Gladiator II",
        "original_title": "Gladiator II",
        "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            28,
            12
        ],
        "popularity": 1044.357,
        "release_date": "2024-11-13",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 46
    },
    {
        "backdrop_path": "/dvBCdCohwWbsP5qAaglOXagDMtk.jpg",
        "id": 533535,
        "title": "Deadpool & Wolverine",
        "original_title": "Deadpool & Wolverine",
        "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            28,
            35,
            878
        ],
        "popularity": 1974.511,
        "release_date": "2024-07-24",
        "video": false,
        "vote_average": 7.703,
        "vote_count": 5236
    },
    {
        "backdrop_path": "/sYXLeu5usz6yEz0k00FYvtEdodD.jpg",
        "id": 94605,
        "name": "Arcane",
        "original_name": "Arcane",
        "overview": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        "poster_path": "/abf8tHznhSvl9BAElD2cQeRr7do.jpg",
        "media_type": "tv",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            16,
            10765,
            10759,
            9648
        ],
        "popularity": 1252.268,
        "first_air_date": "2021-11-06",
        "vote_average": 8.8,
        "vote_count": 4124,
        "origin_country": [
            "US"
        ]
    },
    {
        "backdrop_path": "/qq36sU5xH581RiNEkookMQ9D7yp.jpg",
        "id": 194764,
        "name": "The Penguin",
        "original_name": "The Penguin",
        "overview": "With the city in peril following the seawall's collapse, Oswald \"Oz\" Cobb seeks to fill the power vacuum left by the death of Carmine Falcone and finally give his mother Francis the life he's always promised. But first, Oz must confront his enemies and his own demoralizing reputation as \"the Penguin.\"",
        "poster_path": "/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg",
        "media_type": "tv",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            18,
            80
        ],
        "popularity": 1574.072,
        "first_air_date": "2024-09-19",
        "vote_average": 8.472,
        "vote_count": 412,
        "origin_country": [
            "US"
        ]
    },
    {
        "backdrop_path": "/6neVLKBU4DaWAwpWFhfCpV6yuqN.jpg",
        "id": 1290287,
        "title": "Hot Frosty",
        "original_title": "Hot Frosty",
        "overview": "When a young widow's magic scarf brings a dashing snowman to life, can he help her rediscover romance, laughter and holiday cheer before he melts away?",
        "poster_path": "/iEh7c4tOZMmUQmfvpoRxPfY7tR3.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            10749,
            35
        ],
        "popularity": 38.938,
        "release_date": "2024-11-12",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4
    },
    {
        "backdrop_path": "/ljNVBysYnPCwLqP3HXL7T1thZxu.jpg",
        "id": 402431,
        "title": "Wicked",
        "original_title": "Wicked",
        "overview": "Elphaba, an ostracized but defiant girl born with green skin, and Glinda, a privileged aristocrat born popular, become extremely unlikely friends in the magical Land of Oz. As the two girls struggle with their opposing personalities, their friendship is tested as both begin to fulfill their destinies as Glinda the Good and The Wicked Witch of the West.",
        "poster_path": "/77I0pl0M83DjfEIvt4twlZSpAmg.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            18,
            14,
            10749
        ],
        "popularity": 325.04,
        "release_date": "2024-11-20",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "backdrop_path": "/2Erj4Oav9EHAtqLI354VM7ULDqu.jpg",
        "id": 73586,
        "name": "Yellowstone",
        "original_name": "Yellowstone",
        "overview": "Follow the violent world of the Dutton family, who controls the largest contiguous ranch in the United States. Led by their patriarch John Dutton, the family defends their property against constant attack by land developers, an Indian reservation, and America’s first National Park.",
        "poster_path": "/s4QRRYc1V2e68Qy9Wel9MI8fhRP.jpg",
        "media_type": "tv",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            37,
            18
        ],
        "popularity": 1988.272,
        "first_air_date": "2018-06-20",
        "vote_average": 8.2,
        "vote_count": 2353,
        "origin_country": [
            "US"
        ]
    },
    {
        "backdrop_path": "/u2eA9pqi1q3DvevT7RuDuJHxxBT.jpg",
        "id": 974950,
        "title": "Emilia Pérez",
        "original_title": "Emilia Pérez",
        "overview": "Rita, an underrated lawyer working for a large law firm more interested in getting criminals out of jail than bringing them to justice, is hired by the leader of a criminal organization.",
        "poster_path": "/7seqaCaaXDNUHOx4DqwpoOH8pPa.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "fr",
        "genre_ids": [
            18,
            53
        ],
        "popularity": 53.812,
        "release_date": "2024-08-21",
        "video": false,
        "vote_average": 7.824,
        "vote_count": 238
    },
    {
        "backdrop_path": "/69idwsnkhqlO18KbVzkAuTHpcko.jpg",
        "id": 1098378,
        "title": "Your Monster",
        "original_title": "Your Monster",
        "overview": "After her life falls apart, soft-spoken actress Laura Franco finds her voice again when she meets a terrifying, yet weirdly charming, monster living in her closet.",
        "poster_path": "/nHlHRntqfDM0ORsfgPL28u4GiTT.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            10749,
            35,
            27,
            10402
        ],
        "popularity": 21.335,
        "release_date": "2024-10-25",
        "video": false,
        "vote_average": 8,
        "vote_count": 10
    },
    {
        "backdrop_path": "/1jXebnKdnb580YOzGuyhuujSGbc.jpg",
        "id": 1088096,
        "title": "Goodrich",
        "original_title": "Goodrich",
        "overview": "Andy Goodrich's life is upended when his wife enters a rehab program, leaving him on his own with their young kids. Goodrich leans on his daughter from his first marriage, Grace, as he ultimately evolves into the father Grace never had.",
        "poster_path": "/uEj9yJKZWvKdSgqiLOBbpe9vSXv.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
            18,
            35
        ],
        "popularity": 20.294,
        "release_date": "2024-10-17",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 4
    }
]