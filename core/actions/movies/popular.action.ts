import { movieApi } from "@/core/actions/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/movies-db/moviesdb-interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie-mapper";

export const popularAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');
        const movies = data?.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    } catch (error) {
        console.log("🚀 ~ ocurrio un error:", error);
    }
};