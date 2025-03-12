import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { CastMovieDetail } from '@/infraestructure/interfaces/movies-db/moviedb.cast.interface';
import { MovieActorPicture } from '../MovieActorPicture';

interface Props {
  listCast: CastMovieDetail[]
}

export const MovieCast = ({ listCast }: Props ) => {

  return (
    <View className='mt-3'>
      <Text className='font-bold text-2xl mx-5 mb-5'>Actores</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={listCast}
        keyExtractor={(item, idx) => `${item?.id}-${idx}`}
        renderItem={({item})=> (
          <MovieActorPicture
            actor={item}
          />
        )}
      />
    </View>
  )
}