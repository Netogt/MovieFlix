import axios from 'axios'
import { useState } from 'react';
import { responseApi, returnUseGetMovies } from '../interfaces/interface';
import { useNavigate } from 'react-router-dom';

const urls: string[] = [
    "https://api.themoviedb.org/3/movie/popular",
    "https://api.themoviedb.org/3/trending/all/day",
    "https://api.themoviedb.org/3/discover/movie",
    "https://api.themoviedb.org/3/discover/tv"
];
const API_KEY: string = "72e9f555e4b89b2f0dec21e97d00d11f";

export default function useGetMovies(): returnUseGetMovies {
    const [list, setList] = useState<responseApi[]>([])
    const navigate = useNavigate()
    function getMovies(listMovie?: string): void {
        let url: string
        switch (listMovie) {
            case "Todos":
                url = urls[1]
                break
            case "Filmes":
                url = urls[2]
                break
            case "Séries":
                url = urls[3]
                break
            default:
                url = urls[0]
                break
        }

        axios({
            method: "GET",
            url: url,
            params: {
                api_key: API_KEY,
                language: "pt-br"
            },
            headers: {
                accept: 'application/json'
            }
        }).then(response => {
            if (!listMovie) {
                let newList: responseApi[] = []
                for (let i = 0; i < 5; i++) {
                    newList.push(response.data.results[i])
                }
                setList(newList)
            } else {
                setList(response.data.results)
            }
        }).catch((error)=>{
            console.error(error)
           navigate('/error')
        })

    }
    return { movies: list, setMovies: getMovies }
}