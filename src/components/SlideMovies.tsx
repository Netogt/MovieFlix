import { useState } from "react";
import PosterSlideMovie from "./PosterSlideMovie";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "../css/SlideMoveis.css";
import 'swiper/css';
import 'swiper/css/pagination';



export default function SlideMovies() {
    const [posterSlide, setPosterSlide] = useState(fakeResponse)

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    posterSlide.map(({ backdrop_path, title, original_name, overview, release_date, vote_average }, index) =>
                        <SwiperSlide key={index}>
                            <PosterSlideMovie
                                backdrop_path={backdrop_path}
                                title={title}
                                original_name={original_name}
                                overview={overview}
                                release_date={release_date}
                                vote_average={vote_average}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
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

]