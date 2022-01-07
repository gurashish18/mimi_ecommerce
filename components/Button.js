import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({buttontext, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{buttontext}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // maxWidth: 300,
        backgroundColor: '#000000',
        paddingVertical: 25,
        borderRadius: 10,
        alignItems: 'center',
        // marginVertical: 20,
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    }
})
