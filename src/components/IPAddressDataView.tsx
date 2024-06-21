import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import colors from '../utils/colors';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { globalStyles } from 'utils/constants';

interface DataItemProps {
    title: string;
    value: string;
    numberOfLines?: number;
}

const DataItem: React.FC<DataItemProps> = ({ title, value, numberOfLines }) => {
    return (
        <View style={styles.dataItemContainer}>
            <Text style={[globalStyles.ipDataTitleText]}>
                {`${title}`}
            </Text>
            <Text
                style={[globalStyles.ipDataValueText]}
                numberOfLines={numberOfLines}>
                {`${value}`}
            </Text>
        </View>
    )
}

interface IPAddressDataViewProps {
    loading?: boolean;
}

const IPAddressDataView: React.FC<IPAddressDataViewProps> = ({ loading = false }) => {
    const { IPAddressData } = useSelector((state: RootState) => state.IPAddressSlice)
    if (loading || IPAddressData === null) return null
    else return (
        <View style={styles.container}>
            <DataItem
                title='IP Address'
                value={IPAddressData.ip}
            />
            <DataItem
                title='Location'
                value={`${IPAddressData.city}, ${IPAddressData.country_code}`}
            />
            <DataItem
                title='Timezone'
                value={`UTC ${IPAddressData?.timezone?.utc}`}
            />
            <DataItem
                title='ISP'
                value={IPAddressData?.connection?.isp}
                numberOfLines={1}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: "row",
        backgroundColor: colors.black,
    },
    dataItemContainer: {
        flex: 1,
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default IPAddressDataView;
