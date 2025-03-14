import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

import { useMovie } from '@/presentation/hooks/useMovie';

import { MovieCast } from '@/presentation/components/Movies/MovieCast';
import MovieHeader from '@/presentation/components/Movies/MovieHeader';
import MovieDescription from '@/presentation/components/Movies/MovieDescription';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    const { movieDetail, castMovieDetail } = useMovie(+id);

    if (movieDetail?.isLoading || !movieDetail.data || !castMovieDetail.data) {
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

            {/* Movie Description */}
            <MovieDescription
                movie={movieDetail.data}
            />

            {/* Movie Description */}
            <MovieCast 
                listCast={castMovieDetail.data}
            />
        </ScrollView>
    )
}

export default MovieScreen;