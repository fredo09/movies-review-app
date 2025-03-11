import React from "react";
import { router } from "expo-router";
import { Image, Pressable } from "react-native";

interface Props {
    id: number;
    poster: string;
    title: string;
    smallPoster?: boolean;
    className?: string;
}

export const MoviePoster = ({id, poster, title, smallPoster = false, className}: Props) => {
    return (
        <Pressable 
            className={`active:opacity-90 px-6 ${className}`}
            onPress={() => router.push(`/movie/${id}`)}>
            <Image
                alt={title}
                className="shadow-lg rounded-2xl w-full h-full"
                resizeMode="cover"
                source={{ uri: poster }}
                style={{
                    width: smallPoster ? 85 : 150,
                    height: smallPoster ? 130 : 250
                }}
            />
        </Pressable>
    );
};
