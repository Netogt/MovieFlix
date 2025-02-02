export interface sectionMoviesProps {
    category: string
}

export interface responseApi {
    backdrop_path: string;
    id: number;
    name?: string;
    original_name?: string;
    title?: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date?: string;
    release_date?: string;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
    video?: boolean;
}

export interface returnUseGetMovies{
    movies: responseApi[],
    setMovies: (listMovie?: string) => void
}

export interface PosterSlideMovieProps{
    backdrop_path: string, 
    title?: string, 
    original_name?: string;
    original_title?: string; 
    overview: string; 
    release_date?: string; 
    vote_average: number;
}