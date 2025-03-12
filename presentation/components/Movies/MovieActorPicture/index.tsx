import { CastMovieDetail } from '@/infraestructure/interfaces/movies-db/moviedb.cast.interface';
import React from 'react'
import { View, Text, Image } from 'react-native';

interface Props {
    actor: CastMovieDetail;
}


export const MovieActorPicture = ({actor}: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-xs">{actor.character}</Text>
      </View>
    </View>
  )
}