import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import LoginScreen from '../Screens/LoginScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'
import VerifyMobileScreen from '../Screens/VerifyMobileScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '617954161772-js55agmrc62f4m198vf7gl7d61m1usak.apps.googleusercontent.com',
          });
    }, [])
    return (
        <Stack.Navigator initialRouteName={"Onboard"}>
            <Stack.Screen name="Onboard" component={OnboardScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="OTPverify" component={VerifyMobileScreen} options={{ title: 'Verify OTP' }}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Reset Password' }}/>
        </Stack.Navigator>
    )
}

export default AuthStack
