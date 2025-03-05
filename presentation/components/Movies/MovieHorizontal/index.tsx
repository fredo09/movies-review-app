import React from "react";
import { View, Text, FlatList } from "react-native";

import { MoviePoster } from "../MoviePoster";

import { Movie } from "@/infraestructure/interfaces/movies-db/moviedb.interface";

interface Props {
    listMovies: Movie[];
    title: string;
    className?: string;
}

export const MovieHorizontal = ({ listMovies, title, className = '' }: Props) => {
    return (
        <View className={`${className}`}>
            <Text className="mb-2 px-4 text-xl font-bold">{ title }</Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={listMovies}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => (
                    <MoviePoster
                        id={item?.id} 
                        poster={item.poster} 
                        title={item?.title} 
                        smallPoster/>
                )}
            />
        </View>
    );
};
