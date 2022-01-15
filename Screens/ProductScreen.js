import React, {useContext, useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Alert } from 'react-native'
import Button from '../components/Button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ImageSlider from '../components/ImageSlider'
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../nav/AuthProvider'

const sizes = [
    {
        id:1,
        size: "XS"
    },
    {
        id:2,
        size: "S"
    },
    {
        id:3,
        size: "M"
    },
    {
        id:4,
        size: "L"
    },
    {
        id:5,
        size: "XL"
    },
]


const ProductScreen = ({ route: { params: { item } }}) => {
    const {user} = useContext(AuthContext)

    const AddtoWishlist = async () => {
        await firestore()
        .collection('users')
        .doc(user.uid)
        .collection('wishlist')
        .add({
          product: item,
          favTime: firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
          console.log('Post Added!');
          Alert.alert(
            'Product added to wishlist!!',
            'Product has been added to wishlist Successfully!',
          );
        })
        .catch((error) => {
          console.log('Something went wrong with added post to firestore.', error);
        });
      }
    return (
        <ScrollView style={{backgroundColor:'#ffffff', paddingHorizontal: 10}}>
            <ImageSlider data={item.image}/>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View>
                    <Text style={{color: '#000000', fontSize: 24, fontWeight: 'bold'}}>{item.brand}</Text>
                    <Text style={{color: '#000000', fontSize: 20, maxWidth: 300}}>{item.title}</Text>
                </View>
                <Icon name="favorite-border" size={30} style={{color: '#000000'}} onPress={AddtoWishlist}/>
            </View>
            <Text style={{color: 'grey', fontSize: 16}}>{item.description}</Text>

            <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#000000', fontSize: 18,  textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>₹{item.price}</Text>
                <Text style={{color: '#39C16C', fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>₹{item.price - item.price * (item.discount/100)}</Text>
                <Text style={{color: '#F72121', fontSize: 20, marginLeft: 20, fontWeight: 'bold'}}>{item.discount}% OFF</Text>
            </View>
            <Text style={{color: '#009A6C', borderBottomWidth: 0.25}}>including all taxes</Text>

            <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Select Size</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10, marginBottom: 20}}>
                {sizes.map((item) => (
                    <View key={item.id} style={{borderWidth: 1, borderRadius: 30, paddingHorizontal: 15, paddingVertical: 5, marginBottom: 10}}>
                        <Text style={{color: '#000000', fontSize: 20}}>{item.size}</Text>
                    </View>                      
                ))}
            </View>
            
            <Button buttontext="ADD TO BAG"/>

            <Text style={{color: '#000000', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Reviews and Ratings</Text>
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "space-around"}}>
                <View style={{backgroundColor:'#009A6C', flexDirection: 'row', alignItems: 'center', padding: 10, borderRadius: 10}}>
                    <Text style={{fontSize:20, color: '#ffffff', fontWeight: 'bold'}}>{item.rating.rate}</Text>
                    <Icon name="star" style={{color: '#ffffff'}} size={30}/>
                </View>
                <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>{item.rating.rate} ratings and {item.rating.count} reviews</Text>
            </View>
        </ScrollView>
    )
}

export default ProductScreen

const styles = StyleSheet.create({})
