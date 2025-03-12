import { useQuery } from "@tanstack/react-query";

import { getMovieByIdAction } from "@/core/actions/movie/detail-action";
import { getCastMovieDbAction } from "@/core/actions/movie/cast-moviedb-action";

export const useMovie = (id: number) => {
    const movieDetail = useQuery({
        queryKey: ['movie-detail', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24,
    });

    const castMovieDetail = useQuery({
        queryKey: ['cast', id],
        queryFn: () => getCastMovieDbAction(id),
        staleTime: 1000 * 60 * 60 * 24
    });

    return {
        movieDetail,
        castMovieDetail
    }
};