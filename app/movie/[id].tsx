import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getMovieByIdAction } from '@/core/actions/movie/detail-action';

const MovieScreen = () => {
    const { id } = useLocalSearchParams();

    // getMovieByIdAction(+id) 

    return (
        <View>
            <Text>MovieScreen</Text>
        </View>
    )
}

export default MovieScreen;