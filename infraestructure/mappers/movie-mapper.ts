import { MovieDBDetailResponse, ProductionCompany } from '../interfaces/movies-db/moviedb.detail.interface';
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

    static fromTheMovieDBDetailComplete = (movie: MovieDBDetailResponse) => {
        return {
            id: movie?.id,
            title: movie?.title,
            rating: movie?.vote_average,
            description: movie?.overview,
            releaseDate: new Date(movie?.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
            genres: movie?.genres.map(genre => genre.name),
            duration: movie?.runtime,
            budget: movie?.budget,
            originalTitle:movie?.original_title,
            productionCompanies: movie?.production_companies.map(c => c.name)
        }
    }
}