import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {AuthContext} from '../nav/AuthProvider'

const ProfileScreen = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <View>
            <Text>Profile screen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
