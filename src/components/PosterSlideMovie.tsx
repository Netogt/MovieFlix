
export default function PosterSlideMovie({ backdrop_path, title, original_name, overview, release_date, vote_average }: any){

    return (
        <div className="postSlideMovie" >
            <div className="slideBoxInfo">
                <div className="slideBoxTitle">
                    <h2>{title ? title : original_name}</h2>
                    <p>{overview}</p>
                </div>
                <div className="slideBoxDate">
                    <p>*{vote_average}</p>
                    <p>{release_date}</p>
                </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
        </div>
    )
}