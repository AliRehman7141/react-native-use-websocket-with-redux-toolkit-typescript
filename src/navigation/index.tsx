import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import Dashboard from 'screens/Dashboard';
import Profile from 'screens/Profile';
import MarketData from 'screens/MarketData';
import colors from 'utils/colors';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: colors.primary },
                    headerTitleStyle: {
                        color: colors.white
                    },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.gray,
                    tabBarLabelStyle: {
                        marginBottom: 5,
                        fontSize: 12,
                        fontWeight: '500',
                    },
                }}>
                <Tab.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        tabBarLabel: 'Dashboard',
                        tabBarIcon: ({ focused, size, color }) => (
                            <Entypo
                                name="home"
                                size={22}
                                color={focused ? colors.primary : colors.gray}
                                style={{
                                    alignSelf: 'center',
                                }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Market"
                    component={MarketData}
                    options={{
                        tabBarLabel: 'Market',
                        tabBarIcon: ({ focused, size, color }) => (
                            <FontAwesome5 name="trademark"
                                size={24}
                                color={focused ? colors.primary : colors.gray}
                                style={{
                                    alignSelf: 'center',
                                }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ focused, size, color }) => (

                            <AntDesign name="user"
                                size={24}
                                color={focused ? colors.primary : colors.gray}
                                style={{
                                    alignSelf: 'center',
                                }}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
