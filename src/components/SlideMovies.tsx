import { useEffect, useState } from "react";
import PosterSlideMovie from "./PosterSlideMovie";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import "../css/SlideMoveis.css";
import 'swiper/css';
import 'swiper/css/pagination';
import useGetMovies from "../hooks/useGetMovies";


export default function SlideMovies() {
    const [posterSlide, setPosterSlide] = useState([])
    const listSlide = useGetMovies()
    if (posterSlide.length == 0) {
        if (listSlide) {
            setPosterSlide(listSlide)
        }
    }

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
