import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { subcategories } from '../API/api'
import { useNavigation } from '@react-navigation/native'

const CategorySlider = () => {
    const navigation = useNavigation()
    return (
        <FlatList
            horizontal={true} 
            data={subcategories} 
            renderItem={({item, index}) => (
                <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("Products", {item})}>
                    <View style={{padding: 10}}>
                        <Image source={{uri: item.image}} style={{height: 60, width: 60, borderRadius: 150 / 2,overflow: "hidden"}}/>
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
        fontWeight: 'bold'
    }
})
