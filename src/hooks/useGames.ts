import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";


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


const useGames = (gamequery : GameQuery) =>(

   useData<Game>("/games",{params : {genres : gamequery.genre?.id , platforms :gamequery.paltform?.id}},
    [gamequery])
)


export default useGames;