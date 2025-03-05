import { movieApi } from "@/core/actions/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/movies-db/moviesdb-interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie-mapper";

export const topRactedAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated');
        const movies = data?.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    } catch (error) {
        console.log("🚀 ~ ocurrio un error:", error);
    }
};