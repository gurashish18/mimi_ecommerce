import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const WINDOW_WIDTH = Dimensions.get("window").width
const CARD_WIDTH = Math.round(WINDOW_WIDTH)

const SearchBar = () => {
    const navigation = useNavigation()
    const windowHeight = Dimensions.get("window").height

    return (
        <View style={{...styles.container, backgroundColor: '#F1F1F1'}}>
            <Icon name="search" style={{...styles.icon, color: '#757575'}}/>
            <TextInput placeholder="Search for Products, Brands and more..." placeholderTextColor={'#757575'} style={{...styles.textinput, color: '#000000'}} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 5,
        margin: 10,
        paddingHorizontal: 5,
        position: 'relative',
    },
    icon: {
        fontSize: 30,
        padding: 2,
        marginRight: 5
    },
    textinput: {
        fontSize: 15,
    },
    searchResults:{
        position: "absolute",
        zIndex: 100,
        top: 60,
        left: 0,
        // marginHorizontal: 10
    },
    card_container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        height: 100,
        width: CARD_WIDTH,
        borderRadius: 10,
        margin: 5,
      },
    Image: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
      }
})