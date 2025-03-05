import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainSlideShow } from "@/presentation/components/MainSlideShow";

const HomeScreen = () => {

    const { nowPlayingQuery: { isLoading, data } } = useMovies();
    const safeArea = useSafeAreaInsets();

    if ( isLoading ) {
        return (
            <View className="justify-center items-center flex-1">
                <ActivityIndicator color="purple" size="large"/>
            </View>
        ); 
    }

    return (
        <View className="mt-2" style={{ paddingTop: safeArea.top }}>
            <Text className="mb-2 font-bold px-4 text-2xl">Movies App</Text>

            {/* Carrusel de imagenes */}
            <MainSlideShow listMovies={data ?? []}/>
        </View>
    );
};

export default HomeScreen;
