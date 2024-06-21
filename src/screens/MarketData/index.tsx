import { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useWebSocket from 'react-native-use-websocket';

const socketUrl = 'wss://stream.binance.com:443/ws';

const MarketData = () => {
    const [tradeData, setTradeData] = useState(null);
    const latestTradeRef = useRef(null);
    const lastUpdateRef = useRef(Date.now());

    const {
        sendJsonMessage,
        lastMessage,
    } = useWebSocket(socketUrl, {
        onOpen: () => {
            console.log('Connected to Binance WebSocket');
            sendJsonMessage({
                method: 'SUBSCRIBE',
                params: ['btcusdt@aggTrade'],
                id: 1
            });
        },
        onClose: () => {
            console.log('Disconnected from Binance WebSocket');
        },
        onError: (e) => {
            console.log(`WebSocket error: ${e.message}`);
        },
        shouldReconnect: (closeEvent) => true,
    });

    useEffect(() => {
        if (lastMessage !== null) {
            try {
                const data = JSON.parse(lastMessage.data);
                if (data.e === 'aggTrade') {
                    latestTradeRef.current = data;
                }
            } catch (error) {
                console.log('Error parsing message:', error);
            }
        }
    }, [lastMessage]);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            if (latestTradeRef.current && now - lastUpdateRef.current > 500) {
                setTradeData(latestTradeRef.current);
                lastUpdateRef.current = now;
            }
        }, 500); // Control the update frequency

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Binance BTC/USDT Price</Text>
            {tradeData ? (
                <View style={styles.tradeDataContainer}>
                    <Text style={styles.label}>Price: ${parseFloat(tradeData?.p).toFixed(2)}</Text>
                    <Text style={styles.label}>Quantity: {parseFloat(tradeData?.q).toFixed(4)}</Text>
                </View>
            ) : (
                <Text style={styles.label}>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
        marginTop: 10,
    },
    tradeDataContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MarketData;
