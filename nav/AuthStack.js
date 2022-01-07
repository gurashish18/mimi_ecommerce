import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import LoginScreen from '../Screens/LoginScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'
import VerifyMobileScreen from '../Screens/VerifyMobileScreen'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={"Onboard"}>
            <Stack.Screen name="Onboard" component={OnboardScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="OTPverify" component={VerifyMobileScreen} options={{ title: 'Verify OTP' }}/>
        </Stack.Navigator>
    )
}

export default AuthStack
