import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProductSlider = ({data}) => {
    const navigation = useNavigation()
    return (
        <FlatList
            horizontal={true} 
            data={data} 
            renderItem={({item, index}) => (
                <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate("Product", {item})}>
                    <Image source={{uri: item.image[0].imageuri}} style={{height: 200, width: 180, resizeMode: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20}}/>
                    <View style={{borderWidth: 0.25, width: '100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, padding: 5}}>
                        <Text style={{color: '#000000', fontSize: 14, fontWeight: 'bold'}}>{item.brand}</Text>
                        <Text style={{color: 'grey', fontSize: 11}} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
                        <Text style={{color: '#000000', fontSize: 16}}>₹{item.price - item.price * (item.discount/100)}</Text>
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
        minHeight: 250,
        width: 180,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
    },
    title2: {
        color:'#000000',
    }
})
