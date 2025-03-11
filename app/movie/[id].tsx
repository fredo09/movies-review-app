import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { useMovie } from '@/presentation/hooks/useMovie';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    const { movieDetail } = useMovie(+id);

    if (movieDetail?.isLoading) {
        return(
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-3 font-bold'>Cargando...</Text>
                <ActivityIndicator color="purple" size="large"/>
            </View>
        );
    }

    return (
        <View>
            <Text>MovieScreen</Text>
        </View>
    )
}

export default MovieScreen;