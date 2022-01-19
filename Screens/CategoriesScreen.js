import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import {categories} from '../API/api'
import { useNavigation } from '@react-navigation/native'

const CategoriesScreen = () => {
    const navigation = useNavigation()
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <Text style={{color: '#000000', fontSize: 30, fontWeight:'bold', letterSpacing:5, alignSelf: 'center', marginVertical: 20}}>Categories</Text>
                    </>
                    }
                horizontal={false} 
                data={categories}
                numColumns={2}
                contentContainerStyle={{alignSelf: 'center'}}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate("Products", {item})} style={{backgroundColor: item.backgroundColor,borderRadius: 20, width: '45%', height: 150, alignItems: 'center', justifyContent: 'center', margin: 10}}>
                        <Image source={item.image} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                        <Text style={{color: '#ffffff', fontSize: 24, fontWeight: 'bold'}}>{item.name}</Text>
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

export default CategoriesScreen

const styles = StyleSheet.create({})
