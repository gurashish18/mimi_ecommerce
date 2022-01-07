import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import {AuthContext} from '../nav/AuthProvider'

const HomeScreen = () => {
    const {logout} = useContext(AuthContext)
    return (
        <View>
            <Text>Hello</Text>

            <Button buttontext="Logout" onPress={()=>logout()}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
