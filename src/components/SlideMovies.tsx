import axios from "axios";
import { useEffect } from "react";
import "../css/SlideMoveis.css";

export default function SlideMovies() {
    useEffect(()=>{
        axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/trending/all/day",
            params: {
                language: "pt-br",
                api_key: "72e9f555e4b89b2f0dec21e97d00d11f"
            }
        }).then(response => console.log(response.data.results))
    },[])
    return (
        <section className="slide">
            <div className="slideBoxTitle">
                <h2>Venom: A Última Rodada</h2>
                <p>
                    Eddie and Venom are on the run.
                    Hunted by both of their worlds
                    and with the net closing in,
                    the duo are forced into a
                    devastating decision that will
                    bring the curtains down on Venom
                    and Eddie's last dance.
                </p>
            </div>
            <div className="slideBoxDate">
                <p>*7.6</p>
                <p>13/11/2024</p>
            </div>
            
        </section>
    )
}