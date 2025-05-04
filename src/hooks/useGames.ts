import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Platform{
    id:number;
    name:string;
    slug:string;
}


export interface Game{
    id : number;
    name : string;
    background_image : string;
    metacritic : number;
    parent_platforms: {platform:Platform}[];
}

interface FetchGamesResponse {
    count : number;
    results : Game[];
}

const useGames = () =>{

    const [games , setGames] = useState<Game[]>([])
    const [error , setError] = useState("")
    const [isloading , setIsloading] = useState(false)
    
    useEffect(() => {

        const controller = new AbortController();

        setIsloading(true)
        apiClient.get<FetchGamesResponse>('/games',{signal : controller.signal})
            .then(res =>{
                setGames(res.data.results)
                setIsloading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsloading(false)
            })

        return () => controller.abort();        

    },[]);

    return {games , error , isloading}
}


export default useGames;