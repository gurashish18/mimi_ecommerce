import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = () => {
    const[email, setemail] = useState('')

    const sendResetMail = async() => {
        if(email.length == 0)
        {
            alert("Enter a valid Email")
            return;
        }
        await auth().sendPasswordResetEmail(email)
        .then(function (user) {
            alert('Please check your email...')
        }).catch(function (e) {
            console.log(e)
        })
    }
    return (
        <View style={{flex:1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20}}>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}></Text>
            <Input value={email} setvalue={setemail} placeholder="Registered Email" icon="link"/>
            <Button buttontext="Send Link" onPress={sendResetMail}/>
        </View>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})
