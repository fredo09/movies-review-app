import { MovieMapper } from "@/infraestructure/mappers/movie-mapper";
import { movieApi } from "../api/movie-api";
import { MovieDBDetailResponse } from "@/infraestructure/interfaces/movies-db/moviedb.detail.interface";

export const getMovieByIdAction = async(id: number | string) => {
    try {
        const { data } = await movieApi.get<MovieDBDetailResponse>(`/${id}`);
        return MovieMapper.fromTheMovieDBDetailComplete(data);
    }catch(error) {
        console.log("🚀 ~ ocurrio un error :", error);
        throw 'Ocurrio un error al obtener la pelicula';
    }
};