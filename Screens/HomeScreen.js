import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import {AuthContext} from '../nav/AuthProvider'

const HomeScreen = () => {
    const {logout, user} = useContext(AuthContext)
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20}}>
            <Text>Welcome {user.uid}</Text>
            <Button buttontext="Logout" onPress={()=>logout()}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
