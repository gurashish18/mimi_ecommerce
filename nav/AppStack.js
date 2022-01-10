import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../Screens/HomeScreen';
import CategoriesScreen from '../Screens/CategoriesScreen'
import ProfileScreen from '../Screens/ProfileScreen'

const Tab = createBottomTabNavigator()

const AppStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home Screen"
            screenOptions={{
                tabBarActiveTintColor: '#000000',
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ffffff' },
            }}>
                <Tab.Screen
                    name="Home Screen"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                        <Image source={require('../assets/mimi_logo.png')} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                        ),
                }}/>
                <Tab.Screen
                    name="Categories Screen"
                    component={CategoriesScreen}
                    options={{
                        tabBarLabel: 'Categories',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="category" color={color} size={30} />
                        ),
                }}/>
                <Tab.Screen
                    name="Profile Screen"
                    component={ProfileScreen}
                    options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="person" color={color} size={30} />
                    ),
                }}/>
        </Tab.Navigator>
    )
}

export default AppStack
