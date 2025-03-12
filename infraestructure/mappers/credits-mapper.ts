import { CastMovieDetail } from "../interfaces/movies-db/moviedb.cast.interface";
import { MovieDBCast } from "../interfaces/movies-db/moviedb.cast.response.interface";

export class CastMapper {
    static fromMovieDBCastToEntity(actor: MovieDBCast): CastMovieDetail {
      return {
        id: actor.id,
        name: actor.name,
        character: actor.character ? actor.name : 'No character',
        avatar: actor.profile_path
          ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
          : 'https://i.stack.imgur.com/l60Hf.png', // esto en caso de no tener imagen
      };
    }
  }