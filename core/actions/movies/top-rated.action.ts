import { movieApi } from "@/core/actions/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/movies-db/moviesdb-interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie-mapper";


interface Options {
    page?: number;
    limit?: number;
}

export const topRactedAction = async ({ page = 1, limit = 10 }: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: page,
            }
        });
        const movies = data?.results.map(MovieMapper.fromTheMovieDBToMovie);

        return movies;
    } catch (error) {
        console.log("🚀 ~ ocurrio un error:", error);
    }
};