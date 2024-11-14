export default function Movie({ movie }: any) {
    const { title, original_name, vote_average, release_date, poster_path, overview } = movie
    return (
        <li className="moviePoster">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <div className="movieInfo">
                <h3>{title ? title : original_name}</h3>
                <span>
                    <p>{vote_average}</p>
                    <p>{release_date}</p>
                </span>
                <p className="overViewMovie">
                    {overview}
                   
                </p>
                <p>continua...</p>
            </div>
        </li>
    )
}