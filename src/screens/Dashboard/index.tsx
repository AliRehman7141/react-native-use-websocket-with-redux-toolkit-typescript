import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"


import { getIPAddressInfoAPI } from '../../api/methods';
import {
    Loader,
    InputField,
    IPAddressDataView,
    MyCarousel
} from 'components';
import { moderateScale } from 'utils/scale';
import { useDispatch } from 'react-redux';
import { onChangeCurrentIPAddressData } from 'store/reducers/IPAddressSlice';

import styles from './styles';
import colors from 'utils/colors';

const Dashboard = () => {

    const dispatch = useDispatch()

    const [IsLoading, setIsLoading] = useState(false);
    const [IPAddressValue, setIPAddressValue] = useState("");
    const [IPAddressData, setIPAddressData] = useState(null);

    useEffect(() => {
        getIPAddressInfo()
    }, []);

    const getIPAddressInfo = async () => {
        try {
            setIsLoading(true);
            const response = await getIPAddressInfoAPI(IPAddressValue);
            dispatch(onChangeCurrentIPAddressData(response?.data))
            setIPAddressValue(response?.data?.ip)
        } catch (error) {
            console.log("getIPAddressInfo-error", error)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.Heading}>IP Tracker</Text>
                <InputField
                    placeholder='Enter IP address here'
                    onChangeText={(value: string) => setIPAddressValue(value)}
                    value={IPAddressValue}
                />
                <TouchableOpacity
                    style={styles.ArrowBtn}
                    onPress={getIPAddressInfo}>
                    <View style={styles.row}>
                        <Text style={styles.ArrowBtnTxt}>Proceed</Text>
                        <AntDesign name="arrowright" size={moderateScale(16)} color={colors.white} />
                    </View>
                </TouchableOpacity>
            </View>
            <IPAddressDataView loading={IsLoading} />
            <MyCarousel loading={IsLoading} />
            <Loader loading={IsLoading} />
        </SafeAreaView>
    );
}

export default Dashboard;
