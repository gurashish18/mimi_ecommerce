import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../Screens/HomeScreen';
import CategoriesScreen from '../Screens/CategoriesScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import ProductsScreen from '../Screens/ProductsScreen'
import ProductScreen from '../Screens/ProductScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const ProductStack = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Categories" component={CategoriesScreen} />
                    <Stack.Screen name="Products" component={ProductsScreen} />
                    <Stack.Screen name="Product" component={ProductScreen} /> 
            </Stack.Navigator>
    )
}

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
                    component={ProductStack}
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
