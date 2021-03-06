import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../nav/AuthProvider'
import Spinner from 'react-native-loading-spinner-overlay';

const CreateAccountScreen = () => {
    const navigation = useNavigation()
    const[name, setname] = useState('')
    const[mobile, setmobile] = useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')

    const[nameerr, setnameerr] = useState('');
    const[emailerr, setemailerr] = useState('');
    const[passerr, setpasserr] = useState('');
    const[mobilerr, setmobilerr] = useState('')

    const {register, spinner} = useContext(AuthContext)

    const nameValidation = () => {
        if(!name || name.length < 2){
            setnameerr("**Name is not valid")
            return false;
        }
        setnameerr('')
        return true; 
    }

    const phoneValidation = () => {
        if(!mobile || mobile.length < 10){
            setmobilerr("**Phone number is not valid")
            return false;
        }
        setmobilerr('')
        return true; 
    }

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

    const handleRegister = () => {
        if(nameValidation() && phoneValidation() && emailValidation() && passwordValidation())
            register(email, password, name, mobile)
            // navigation.navigate("OTPverify", {name, mobile, email, password})
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
        <Text style={{fontSize: 30, color: '#000000', fontWeight: 'bold'}}>Create Account</Text>
        <View style={{width: '100%', paddingHorizontal: 20}}>
            <Input value={name} setvalue={setname} placeholder="Fullname" icon="user"/>
            <Text style={{color: 'red', fontStyle: 'italic'}}>{nameerr}</Text>

            <Input value={mobile} setvalue={setmobile} placeholder="Mobile Number" icon="link"/>
            <Text style={{color: 'red', fontStyle: "italic"}}>{mobilerr}</Text>

            <Input value={email} setvalue={setemail} placeholder="Username" icon="user"/>
            <Text style={{color: 'red', fontStyle: 'italic'}}>{emailerr}</Text>

            <Input value={password} setvalue={setpassword} placeholder="Password" icon="lock"/>
            <Text style={{color: 'red', fontStyle: 'italic'}}>{passerr}</Text>

            <Button buttontext="Sign Up" onPress={handleRegister}/>

            <View style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 20}}>
                <Text style={{color: 'grey', fontSize: 16}}>Already have an Account? </Text>
                <Text onPress={()=>navigation.navigate("Login")} style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>Log In</Text>
            </View>
        </View>
        
</ScrollView>
    )
}

export default CreateAccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
