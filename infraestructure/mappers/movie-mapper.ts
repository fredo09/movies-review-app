import { Movie } from "../interfaces/movies-db/moviedb.interface";
import { Result } from "../interfaces/movies-db/moviesdb-interfaces";

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie?.id,
            title: movie?.title,
            rating: movie?.vote_average,
            description: movie?.overview,
            releaseDate: new Date(movie?.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`
        }
    }
}