import axios from 'axios'
import { useEffect, useState } from 'react';

const urls: string[] = [
    "https://api.themoviedb.org/3/movie/popular",
    "https://api.themoviedb.org/3/trending/all/day",
    "https://api.themoviedb.org/3/discover/movie",
    "https://api.themoviedb.org/3/discover/tv"
];
const API_KEY: string = "72e9f555e4b89b2f0dec21e97d00d11f";

export default function useGetMovies(listMovie?: string) {
    const [list, setList] = useState()
    useEffect(() => {
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
        if (!url) return;
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
        }).then(response =>{ 
            setList(response.data.results)
        })
    }, [])
    
    if(list) {
        if(!listMovie){
            let newList = []
            for (let i = 0; i < 5; i++) {
                newList.push(list[i])   
            }
            return newList
        }
        return list
    };
}