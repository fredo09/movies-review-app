import React from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { useMovie } from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/Movies/MovieHeader';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    const { movieDetail } = useMovie(+id);

    if (movieDetail?.isLoading || !movieDetail.data) {
        return(
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-3 font-bold'>Cargando...</Text>
                <ActivityIndicator color="purple" size="large"/>
            </View>
        );
    }

    return (
        <ScrollView>
            {/* Header */}
            <MovieHeader
                title={movieDetail.data.title}
                poster={movieDetail.data.poster}
                originalTitle={movieDetail.data.originalTitle}
            />
        </ScrollView>
    )
}

export default MovieScreen;