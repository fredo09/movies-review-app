import React, { useEffect, useRef } from "react";
import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from "react-native";

import { MoviePoster } from "../MoviePoster";

import { Movie } from "@/infraestructure/interfaces/movies-db/moviedb.interface";

interface Props {
    listMovies: Movie[];
    title: string;
    className?: string;
    loadNextPage?: () => void;
}

export const MovieHorizontal = ({ listMovies = [], title, className = '', loadNextPage }: Props) => {
    const isLoadingScroll = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoadingScroll.current = false;
        }, 2000);
    },[listMovies]);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if ( isLoadingScroll.current ) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReached) return;

        isLoadingScroll.current = true;
        console.log("🚀 ~ cargar siguientes peliculas:");

        //! Si es undefined no se ejecuta pero si lo es ejecuta la funcion loadNextPage
        loadNextPage && loadNextPage();

        //! -> isLoadingScroll.current = false;
    };


    return (
        <View className={`${className}`}>
            <Text className="mb-2 px-4 text-xl font-bold">{ title }</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listMovies}
                keyExtractor={(item, idx) => `${item.id}-${idx}`}
                renderItem={({item}) => (
                    <MoviePoster
                        id={item?.id} 
                        poster={item.poster} 
                        title={item?.title} 
                        smallPoster/>
                )}
                onScroll={onScroll}
            />
        </View>
    );
};
