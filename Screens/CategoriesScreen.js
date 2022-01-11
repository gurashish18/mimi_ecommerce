import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import{categories} from '../API/api'
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
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate("Products", {item})} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20, borderWidth: 1, padding: 10, borderRadius: 20}}>
                        <Image source={item.image} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                        <View>
                            <Text style={{color: '#000000', fontSize: 24, fontWeight: 'bold'}}>{item.name}</Text>
                            <Text style={{color: 'grey'}}>{item.text}</Text>
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

export default CategoriesScreen

const styles = StyleSheet.create({})
