import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../nav/AuthProvider'

const CreateAccountScreen = () => {
    const navigation = useNavigation()
    const[name, setname] = useState('')
    const[mobile, setmobile] = useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const {register} = useContext(AuthContext)
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
        <Image source={require('../assets/mimi_logo.png')} style={{width: 100, height: 100, resizeMode: 'contain'}}/>
        <Text style={{fontSize: 30, color: '#000000', fontWeight: 'bold'}}>Create Account</Text>
        <View style={{width: '100%', paddingHorizontal: 20}}>
            <Input value={name} setvalue={setname} placeholder="Fullname" icon="user"/>
            <Input value={mobile} setvalue={setmobile} placeholder="Mobile Number" icon="link"/>
            <Input value={email} setvalue={setemail} placeholder="Username" icon="user"/>
            <Input value={password} setvalue={setpassword} placeholder="Password" icon="lock"/>
            <Button buttontext="Sign Up" onPress={()=>register(email, password, name, mobile, )}/>

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
