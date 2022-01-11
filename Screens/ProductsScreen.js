import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProductsScreen = ({ route: { params: { item } }}) => {
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                    </>
                    }
                horizontal={false}
                data={item.products}
                numColumns={2} 
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate("Product",{item})} style={{width: '50%', borderWidth: 0.25, padding: 10, borderColor: 'lightgrey'}}>
                        <Image source={{uri: item.image[0].imageuri}} style={{height: 250, width: 150, resizeMode: 'contain'}}/>

                        <View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View>
                                    <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold'}}>{item.brand}</Text>
                                    <Text style={{color: 'grey', width: 150}} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                                </View>
                                <Icon name="favorite-border" style={{color: 'red'}} size={25}/>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                                <Text style={{color: 'grey', fontSize: 16,  textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>₹{item.price}</Text>
                                <Text style={{color: '#39C16C', fontSize: 16, fontWeight: 'bold'}}>₹{item.price - item.price * (item.discount/100)}</Text>
                                <Text style={{color: 'red', fontSize: 16}}>{item.discount}% OFF</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                        
                    </>
                }    
            />
    )
}

export default ProductsScreen

const styles = StyleSheet.create({})
