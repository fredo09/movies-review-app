import { movieApi } from "@/core/actions/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/movies-db/moviesdb-interfaces";
import { MovieMapper } from "@/infraestructure/mappers/movie-mapper";

export const NowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

        //console.log("🚀 ~ NowPlayingAction ~ data:", JSON.stringify(data, null, 2));
        const movies = data?.results.map(MovieMapper.fromTheMovieDBToMovie);
        
        console.log("🚀 ~ NowPlayingAction ~ movies:", JSON.stringify(movies, null, 2));
        return movies;
    } catch (error) {
        console.log("🚀 ~ ocurrio un error:", error);
    }
};