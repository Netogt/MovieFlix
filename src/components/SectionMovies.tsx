import { useEffect, useRef } from "react";
import Movie from "./Movie";
import useGetMovies from "../hooks/useGetMovies";
import { sectionMoviesProps } from "../interfaces/interface";
import "../css/SectionMovies.css";

export default function SectionMovies({ category }: sectionMoviesProps) {
    const {movies, setMovies} = useGetMovies()
    useEffect(() => {
        setMovies(category)
    }, [])
    const listMv: React.MutableRefObject<null> = useRef(null)
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
            <h2>{category}</h2>
            <ul className="movieList" >
                <button className="buttonLeft" onClick={() => moveScroll("left")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
                    </svg>
                </button>
                <div ref={listMv}>
                    {
                        movies.map(movie => <Movie key={movie.id} movie={movie} />)
                    }
                </div>
                <button className="buttonRight" onClick={() => moveScroll("right")}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                    </svg>
                </button>
            </ul>
        </section>
    )
}