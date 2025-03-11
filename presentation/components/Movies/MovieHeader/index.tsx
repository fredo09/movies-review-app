import React from "react";
import { router } from "expo-router";
import{ Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
// import { AirbnbRating, Rating } from 'react-native-ratings';
import { View, useWindowDimensions, Image, Text, Pressable } from "react-native";

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
    rating?: number;
}

const MovieHeader = ({ poster, originalTitle, title, rating = 0 }: Props) => {
    const { height:screenHeight  } = useWindowDimensions(); // -> dimension de window dispositivo

    return (
        <>  
            {/* Gradiente header */}
            <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'transparent']}
                start={[0, 0]}
                style={{ 
                    height: screenHeight * 0.4,
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%'
                }}/>

            {/* Icon Header */}
            <View style={{
                position: 'absolute',
                zIndex: 99,
                elevation: 9,
                top: 55,
                left: 15
            }}>
                <Pressable
                    onPress={() => router.dismiss() }>
                    <Ionicons
                        name="arrow-back"
                        size={30}
                        color="white"
                        className="shadow"
                    />
                </Pressable>
            </View>

            {/* Image header */}
            <View
                style={{ height:screenHeight * 0.7 }}
                className="shadow-xl shadow-black/20">

                    <View className="flex-1 rounded-b-[25px] overflow-hidden">
                        <Image
                            className="flex-1"
                            source={{ uri: poster }}
                            resizeMode="cover"
                        />
                    </View>
            </View>

            {/* title  */}
            <View className="px-5 mt-3">
                <View>
                    <Text className="font-normal text-xl">{originalTitle}</Text>
                    <Text className="font-semibold text-4xl">{title}</Text>
                    {/* <Text className="">{rating}</Text> */}
                </View>
                {/* <View>
                    <Rating
                        type='heart'
                        ratingCount={5}
                        imageSize={30}
                        showRating
                        ratingColor='#e2e2e2e'
                        onFinishRating={(rating) => rating}
                        style={{ paddingVertical: 10 }}
                        />
                </View> */}
            </View>
        </>
    );
};

export default MovieHeader;
