import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import LoginScreen from '../Screens/LoginScreen'
import CreateAccountScreen from '../Screens/CreateAccountScreen'
import VerifyMobileScreen from '../Screens/VerifyMobileScreen'

const Navigation = () => {
    const [user, setuser] = useState(false)
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                    <Stack.Screen name="Onboard" component={OnboardScreen}  options={{ headerShown: false }}/>
                    {user ? (
                    <>
                        {/* <Stack.Screen name="AppNav" component={AppNav} /> */}
                    </>
                    ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }}/>
                        <Stack.Screen name="OTPverify" component={VerifyMobileScreen} options={{ title: 'Verify OTP' }}/>
                        {/* <Stack.Screen name="AppNav" component={AppNav} /> */}
                    </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

