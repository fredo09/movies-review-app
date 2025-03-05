import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainSlideShow } from "@/presentation/components/MainSlideShow";
import { MovieHorizontal } from "@/presentation/components/Movies/MovieHorizontal";

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();

    const { nowPlayingQuery, popularMovieQuery } = useMovies();

    if ( nowPlayingQuery?.isLoading ) {
        return (
            <View className="justify-center items-center flex-1">
                <ActivityIndicator color="purple" size="large"/>
            </View>
        ); 
    }

    return (
        <View className="mt-2" style={{ paddingTop: safeArea.top }}>
            <Text className="mb-2 font-bold px-4 text-2xl">Movies App</Text>

            {/* Carrusel de imagenes NowPlaying */}
            <MainSlideShow listMovies={nowPlayingQuery?.data ?? []}/>

            {/* Carrusel de imagenes popular */}
            <MovieHorizontal listMovies={popularMovieQuery?.data ?? []} title="Populares"/>

        </View>
    );
};

export default HomeScreen;
