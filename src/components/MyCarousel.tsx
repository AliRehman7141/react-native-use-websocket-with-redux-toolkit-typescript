import React, { useState, useRef, useEffect } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import AvatarComponent from './AvatarComponent';
import { useDispatch } from 'react-redux';
import { onChangeActiveImage } from 'store/reducers/IPAddressSlice';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');
const IMAGE_WIDTH = screenWidth - 60
const IMAGE_HEIGHT = 200

interface MyCarouselProps {
    loading: boolean;
}

interface CarouselItem {
    item: string;
}


const MyCarousel: React.FC<MyCarouselProps> = ({ loading }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [entries] = useState([
        'https://picsum.photos/id/870/200/300?grayscale&blur=2',
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/200/300?grayscale',
        'https://picsum.photos/200/300/?blur'
    ]);

    const carouselRef = useRef(null);

    useEffect(() => {
        dispatch(onChangeActiveImage(entries[0]))
    }, [])

    if (loading) return null

    const onSnapToItem = (index: number) => {
        dispatch(onChangeActiveImage(entries[index]))
    }

    const renderItem = ({ item }: CarouselItem) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Profile")
            }}>
            <AvatarComponent
                source={{ uri: item }}
                style={styles.slideImage}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={entries}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={IMAGE_WIDTH}
                layout="default"
                onSnapToItem={onSnapToItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    slideImage: {
        borderRadius: 20,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT
    }
});

export default MyCarousel;
