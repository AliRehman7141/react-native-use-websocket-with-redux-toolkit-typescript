import React, { FC, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
} from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';
import colors from 'utils/colors';

type Source = number | { uri: string; headers?: { [key: string]: string } };

interface AvatarComponentProps {
    source: Source;
    size?: number;
    style?: ImageStyle;
}

const AvatarComponent: FC<AvatarComponentProps> = (props) => {
    const {
        source,
        size,
        style,
    } = props;

    const [loading, setLoading] = useState(false);
    const [imageSource, setImageSource] = useState<Source>(source);

    useEffect(() => {
        setImageSource(source);
    }, [source]);

    return (
        <FastImage
            {...props}
            style={style}
            source={imageSource}
            resizeMode={FastImage.resizeMode.cover}
            onError={() => {
                setImageSource(0);
            }}
            onLoadStart={() => {
                setLoading(true);
            }}
            onLoadEnd={() => {
                setLoading(false);
            }}>
            <View
                style={[StyleSheet.absoluteFill, {
                    alignItems: 'center',
                    justifyContent: 'center',
                }]}>
                <ActivityIndicator
                    animating={loading}
                    color={colors.primary}
                    size={size ? size : 'large'}
                />
            </View>
        </FastImage>
    );
};

export default AvatarComponent;
