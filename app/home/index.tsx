import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainSlideShow } from "@/presentation/components/MainSlideShow";
import { MovieHorizontal } from "@/presentation/components/Movies/MovieHorizontal";
import { Movie } from "@/infraestructure/interfaces/movies-db/moviedb.interface";

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();

    const { 
        nowPlayingQuery, 
        popularMovieQuery, 
        topRatedMovieQuery, 
        upComingMovieQuery 
    } = useMovies();

    const topRateMoviesFilter = topRatedMovieQuery.data?.pages.flat().filter((movie): movie is Movie => movie !== undefined);

    if ( nowPlayingQuery?.isLoading ) {
        return (
            <View className="justify-center items-center flex-1">
                <ActivityIndicator color="purple" size="large"/>
            </View>
        ); 
    }

    return (
        <ScrollView>
            <View style={{ paddingTop: safeArea.top }} className="mt-2 pb-11">
                <Text className="mb-2 font-bold px-4 text-2xl">Movies App 🎥</Text>

                {/* Carrusel de imagenes NowPlaying */}
                <MainSlideShow 
                listMovies={nowPlayingQuery?.data ?? []}/>

                {/* Carrusel de imagenes popular */}
                <MovieHorizontal 
                className="mb-6" 
                listMovies={popularMovieQuery?.data ?? []} 
                title="Populares 😎"/>

                {/* Carrusel de imagenes top */}
                <MovieHorizontal
                className="mb-6"
                listMovies={ topRateMoviesFilter ?? []}
                loadNextPage={topRatedMovieQuery.fetchNextPage}
                title="Mejor Calificadas 🌟"/>

                {/* Carrusel de imagenes extrenos */}
                <MovieHorizontal 
                className="mb-6" 
                listMovies={upComingMovieQuery?.data ?? []}
                title="Proximamente 👀"/>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
