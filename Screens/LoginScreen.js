import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import Spinner from 'react-native-loading-spinner-overlay';
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../nav/AuthProvider'

const LoginScreen = () => {
    const navigation = useNavigation()
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const[emailerr, setemailerr]  = useState('')
    const[passerr, setpasserr]  = useState('')
    const {login, spinner, googleLogin, facebookLogin} = useContext(AuthContext)

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            setemailerr("**Email is not valid")
            return false;
        }
        setemailerr('')
        return true;
    }

    const passwordValidation = () => {
        if(!password || password.length < 6){
            setpasserr("**Password length >= 6")
            return false;
        }
        setpasserr('')
        return true;
    }

    const hanlelogin = () => {
        if(emailValidation() && passwordValidation())
            login(email, password)
    }
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
                <Spinner
                    color='#F72121'
                    visible={spinner}
                    textContent={'Loading...'}
                    textStyle={{color: '#F72121'}}
                />
                <Image source={require('../assets/mimi_logo.png')} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 30, color: '#000000', fontWeight: 'bold'}}>Log In</Text>
                <View style={{width: '100%', paddingHorizontal: 20}}>
                    <Input value={email} setvalue={setemail} placeholder="Username" icon="link"/>
                    <Text style={{color: 'red', fontStyle: 'italic'}}>{emailerr}</Text>

                    <Input value={password} setvalue={setpassword} placeholder="Password" icon="link"/>
                    <Text style={{color: 'red', fontStyle: 'italic'}}>{passerr}</Text>

                    <Button buttontext="Log In" onPress={hanlelogin}/>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassword")}>
                        <Text style={{color: 'grey', fontSize: 16, alignSelf: 'center', marginTop: 20}}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <Text style={{alignSelf: 'center', marginVertical: 10, fontSize: 18, color: 'grey'}}>Or</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 10}}>
                        <TouchableOpacity onPress={()=>googleLogin()}>
                            <Image  source={require('../assets/google_logo.png')} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>facebookLogin()}>
                            <Image source={require('../assets/fb_logo.png')} style={{height: 40, width: 40, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
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
