import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';
import { AvatarComponent, IPAddressDataView } from 'components';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

const Profile = () => {

    const { activeImage } = useSelector((state: RootState) => state.IPAddressSlice)

    return (
        <SafeAreaView style={styles.container}>
            <AvatarComponent
                source={{ uri: activeImage }}
                style={styles.slideImage}
            />
            <IPAddressDataView />
        </SafeAreaView>
    );
}

export default Profile;
