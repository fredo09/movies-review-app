import { useQuery } from "@tanstack/react-query";

import { getMovieByIdAction } from "@/core/actions/movie/detail-action";

export const useMovie = (id: number) => {
    const movieDetail = useQuery({
        queryKey: ['movie-detail', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24,
    });

    return {
        movieDetail
    }
};