import axios from "axios";
import { Movie, MovieDetails } from "../types/Movies";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
})

export const getImageUrl = (path: string )=>{
   return path? `https://image.tmdb.org/t/p/original${path}`: "";
}

export const getMovies = async (endpoint: string):Promise<Movie[]>=>{
    try {
        const responce = await api.get(endpoint);
        return responce.data.results;
    } catch (error) {
        console.log(`Error: ${error} fetching movies from ${endpoint}`);
        return [];
    }

}

export const getMovieDetails = async (id: number): Promise<MovieDetails>=>{
    try {
        const responce = await api.get(`/movie/${id}`,{
            params:{
                append_to_response:"videos, credits",
            },
        })
        console.log(responce);
        return responce.data;

    } catch (error) {
        console.log(`Error: ${error} fetching movie details for id: ${id}`);
        throw error;
    }
}

export const getSimilarMovies = async (id: number): Promise<Movie[]>=>{
    try {
        const responce = await api.get(`/movie/${id}/similar`);
        return responce.data.results;
    } catch (error) {
        console.log(`Error: ${error} fetching similar movies for id: ${id}`);
        return [];
    }
}

export const searchMovies = async (query: string): Promise<Movie[]>=>{
    try {
        const responce = await api.get("/search/movie", {
            params:{
                query,
            },
        });
        return responce.data.results;
    } catch (error) {
        console.log(`Error: ${error} searching movies for query: ${query}`);
        return [];
    }
}