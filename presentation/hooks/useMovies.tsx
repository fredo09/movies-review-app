import { useQuery } from "@tanstack/react-query";
import { NowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularAction } from "@/core/actions/movies/popular.action";
import { topRactedAction } from '@/core/actions/movies/top-rated.action';
import { upComingAction } from '@/core/actions/movies/upcoming.action';

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: NowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const popularMovieQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const topRatedMovieQuery = useQuery({
        queryKey: ['movies', 'topRated'],
        queryFn: topRactedAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    const upComingMovieQuery = useQuery({
        queryKey: ['movies', 'upComing'],
        queryFn: upComingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {
        nowPlayingQuery,
        popularMovieQuery,
        topRatedMovieQuery,
        upComingMovieQuery
    };
}