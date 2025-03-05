import React, { useRef } from 'react'
import { useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import { Movie } from '@/infraestructure/interfaces/movies-db/moviedb.interface';
import { MoviePoster } from '../Movies/MoviePoster';

interface Props {
    listMovies: Movie[];
}

export const MainSlideShow = ({ listMovies }: Props) => {
    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width; //* -> with dinamico para cada dispositivo

    return (
        <View className='h-[250px] w-full'>
            <Carousel
                mode='parallax'
                defaultIndex={1}
                ref={ref}
                data={ listMovies }
                width={200} // Add the required width property
                height={350}
                renderItem={({item}) => (
                    <MoviePoster id={item?.id} poster={item?.poster} title={item?.title} />
                )}
                style={{ 
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                modeConfig={{
                    parallaxScrollingOffset: 50,
                    parallaxScrollingScale: 0.8
                }}
            />
        </View>
    );
};
