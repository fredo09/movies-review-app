import React from "react";
import { router } from "expo-router";
import{ Ionicons } from '@expo/vector-icons';
import { View, useWindowDimensions, Image, Text, Pressable } from "react-native";

interface Props {
    poster: string;
    originalTitle: string;
    title: string
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
    const { height:screenHeight  } = useWindowDimensions(); // -> dimension de window dispositivo

    return (
        <>  
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

            {/* title */}
            <View className="px-5 mt-5">
                <Text className="font-normal text-xl">{originalTitle}</Text>
                <Text className="font-semibold text-4xl">{title}</Text>
            </View>
        </>
    );
};

export default MovieHeader;
