import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../pages/Home/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions= {{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerShown: false }}>
                
                <Stack.Screen name="Home" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export function TabNavigator() {
    return (

        <Tab.Navigator 
            barStyle={{ paddingBottom: '50', backgroundColor: '#694fad' }}
            screenOptions={{
                tabBarActiveTintColor: '#007bff',
                animationEnabled: true,
                tabBarStyle: {
                    height: 50,
                    paddingHorizontal: 2,
                    paddingTop: 0,
                    backgroundColor: '#080808',
                    borderTopWidth: 1,
                    borderTopColor: '#cbd0ca',
                },
                headerShown: false }}>

            <Tab.Screen name='HomeScreen' component={HomeScreen} 
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
     )
  }

export default Routes;