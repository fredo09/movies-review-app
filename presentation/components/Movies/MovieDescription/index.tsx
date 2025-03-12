import React from 'react';
import { View, Text } from 'react-native';

import { MovieDetailComplete } from '@/infraestructure/interfaces/movies-db/moviedb.interface';
import { Ionicons } from '@expo/vector-icons';
import { Formatter } from '@/utils/helpers/formatter.value';

interface Props {
    movie: MovieDetailComplete;
}

const MovieDescription = ({ movie }: Props) => {
    return (
        <View className='mx-5'>
            <View className='flex flex-row'>
                <Text className='font-semibold mt-1'>{ movie?.rating }</Text>
                <Ionicons name='star-sharp' color="#FFDA03" size={20} className='ml-2 mr-2'/>
                <Text className='font-thin mt-1'> - { movie.genres.join(', ') }</Text>
            </View>
            
            <View>
                <Text className='font-bold mt-5 text-2xl'>Sinopsis</Text>
                <Text className='font-normal mt-2'>{movie.description}</Text>
            </View>

            <View className='mb-3 mt-2'>
                <Text className='font-bold'> 
                    Presupuesto - {Formatter.currencyMoney(movie.budget)}
                </Text>
            </View>
        </View>
    )
}

export default MovieDescription;