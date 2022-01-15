import React, {useContext, useState, useEffect} from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Pressable, Alert } from 'react-native'
import {AuthContext} from '../nav/AuthProvider'
import firestore from '@react-native-firebase/firestore';
import Button from '../components/Button';

const WishlistScreen = () => {
    const [deleted, setDeleted] = useState(false);
    const {user} = useContext(AuthContext)
    const [wishlist, setwishlist] = useState(null)

    const getWishlist = async() => {
        const list = [];
        await firestore()
        .collection('users')
        .doc(user.uid)
        .collection('wishlist')
        .get()
        .then((querySnapshot) => {
        //   console.log('Total Posts: ', querySnapshot.size);
        querySnapshot.forEach((doc) => {
            const {product} = doc.data();
            list.push({
              id: doc.id,
              product
            });
          });
        setwishlist(list);
        console.log(wishlist)
        })
    }

    const removeProduct = (postId) => {
          firestore()
          .collection('users')
          .doc(user.uid)
          .collection('wishlist')
          .doc(postId)
          .delete()
          .then(() => {
            Alert.alert(
              'Post deleted!',
              'Your post has been deleted successfully!',
            );
            setDeleted(true);
          })
          .catch((e) => console.log('Error deleting posst.', e));
      };

    useEffect(() => {
        getWishlist();
    }, []);

    useEffect(() => {
        getWishlist();
        setDeleted(false)
    }, [deleted]);
    return (
        <View style={{backgroundColor: '#ffffff', flex: 1}}>
            <Text style={{color: '#000000', fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginVertical: 20}}>My wishlist</Text>
            {
                wishlist !== null ? 
                (
                    <FlatList
                        horizontal={false} 
                        data={wishlist} 
                        renderItem={({item, index}) => (
                            <View key={item.product.id} style={{margin: 10, borderWidth: 0.25, padding: 5, borderRadius: 20, borderColor: 'grey'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Image source={{uri: item.product.image[0].imageuri}} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                                    <View>
                                        <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold', maxWidth: 200}}>{item.product.brand}</Text>
                                        <Text style={{color: 'grey', fontSize: 14, maxWidth: 200}}>{item.product.title}</Text>
                                        <Text style={{color: '#F72121', fontSize: 16, fontWeight: 'bold'}}>{item.product.discount}% OFF</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: "center", justifyContent: 'space-evenly'}}>
                                    <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20}}>₹{(item.product.price - item.product.price * (item.product.discount/100)).toFixed(2)}</Text>
                                    <Pressable style={styles.container} onPress={()=>removeProduct(item.id)}>
                                        <Text style={styles.text}>Remove</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id}    
                    />
                )
                :
                (
                    <Text style={{color: '#000000'}}>Nothing in your wishlist yet!!</Text>
                )
            }
        </View>
    )
}

export default WishlistScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold'
    }
})
