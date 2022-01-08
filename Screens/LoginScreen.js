import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../nav/AuthProvider'

const LoginScreen = () => {
    const navigation = useNavigation()
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const {login, spinner} = useContext(AuthContext)

    // const hanlelogin = () => {
    //     setspinner(true)
    //     login(email, password)
    //     setspinner(false)
    // }
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
                <Spinner
                    color='#000000'
                    visible={spinner}
                    textContent={'Loading...'}
                    textStyle={{color: '#000000'}}
                />
                <Image source={require('../assets/mimi_logo.png')} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 30, color: '#000000', fontWeight: 'bold'}}>Log In</Text>
                <View style={{width: '100%', paddingHorizontal: 20}}>
                    <Input value={email} setvalue={setemail} placeholder="Username" icon="link"/>
                    <Input value={password} setvalue={setpassword} placeholder="Password" icon="link"/>
                    <Button buttontext="Log In" onPress={() =>login(email, password)}/>

                    <Text style={{alignSelf: 'center', marginVertical: 10, fontSize: 18, color: 'grey'}}>Or</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 10}}>
                        <Image source={require('../assets/google_logo.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                        <Image source={require('../assets/fb_logo.png')} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                        <Image source={require('../assets/insta_logo.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>

                    <View style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 20}}>
                        <Text style={{color: 'grey', fontSize: 16}}>Don't have an Account? </Text>
                        <Text onPress={()=>navigation.navigate("CreateAccount")} style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>Create Account</Text>
                    </View>
                </View>
                
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
