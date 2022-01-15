import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProductSlider = ({data}) => {
    const navigation = useNavigation()
    return (
        <FlatList
            horizontal={true} 
            data={data} 
            renderItem={({item, index}) => (
                <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("Product", {item})}>
                    <Image source={{uri: item.image[0].imageuri}} style={{height: 180, width: '100%', resizeMode: 'contain', borderRadius: 30}}/>
                    <View>
                        <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>{item.brand}</Text>
                        <Text style={{color: 'grey', fontSize: 12}} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                        <Text style={{color: '#000000', fontSize: 20}}>₹{item.price - item.price * (item.discount/100)}</Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id}    
        />
    )
}

export default ProductSlider

const styles = StyleSheet.create({
    item: {
        width: 180,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        borderWidth: 0.25,
        borderColor: 'grey'
    },
    title2: {
        color:'#000000',
    }
})
