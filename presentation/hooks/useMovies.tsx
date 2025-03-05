import { useQuery } from "@tanstack/react-query";
import { NowPlayingAction } from "@/core/actions/movies/now-playing.action";

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ['movies','nowPlaying'],
        queryFn: NowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    return {
        nowPlayingQuery
    };
}