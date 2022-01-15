import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { categories } from '../API/api'
import { useNavigation } from '@react-navigation/native'

const CategorySlider = () => {
    const navigation = useNavigation()
    return (
        <FlatList
            horizontal={true} 
            data={categories} 
            renderItem={({item, index}) => (
                <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("Products", {item})}>
                    <View style={{borderWidth:0.25, borderColor:'red', borderRadius: 50, padding: 10}}>
                        <Image source={item.image} style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                    </View>
                    <Text style={styles.title2}>{item.name}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}    
        />
    )
}

export default CategorySlider

const styles = StyleSheet.create({
    item: {
        marginHorizontal: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title2: {
        color:'#000000',
    }
})
