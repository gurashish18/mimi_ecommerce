import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'


const Input = ({value, setvalue, placeholder, icon, secureTextEntry}) => {
    return (
        <View style={{...styles.container, backgroundColor: '#ffffff'}}>
            <Icon name={icon} style={{...styles.icon, color: 'grey'}}/>
            <TextInput value={value} onChangeText={setvalue} placeholder={placeholder} placeholderTextColor={'grey'} secureTextEntry={secureTextEntry} style={{...styles.input, color: '#000000'}} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
         borderColor: 'grey'
    },
    input: {
        fontSize: 16,
    },
    icon: {
        fontSize: 24,
        marginRight: 20
    }
})
