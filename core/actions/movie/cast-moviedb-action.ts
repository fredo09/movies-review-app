import { CastMovieDBResponse } from "@/infraestructure/interfaces/movies-db/moviedb.cast.response.interface";
import { movieApi } from "../api/movie-api";
import { CastMapper } from "@/infraestructure/mappers/credits-mapper";

export const getCastMovieDbAction = async (movieId: number | string) => {
    try {
        let resultCredits = [];
        const { data } = await movieApi.get<CastMovieDBResponse>(`/${movieId}/credits`);
        resultCredits = data?.cast;

        if (data.cast.length === 0) {
            resultCredits = data?.crew;
        }

        return resultCredits.map(CastMapper.fromMovieDBCastToEntity);
    } catch (error) {
        console.log("🚀 ~ Ocurrio un error :", error);
        throw 'Error al obtener el reparto X(';
    }
};