import React, {useContext, useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import {AuthContext} from '../nav/AuthProvider'
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'

const data = [
    {
        id:1,
        name: 'Orders',
        icon: 'shopping-bag',
        destination: ''
    },
    {
        id:2,
        name: 'Help Center',
        icon: 'help',
        destination: ''
    },
    {
        id:3,
        name: 'Wishlist',
        icon: 'favorite',
        destination: ''
    },
]

const ProfileScreen = () => {
    const {user, logout} = useContext(AuthContext)
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
        await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            console.log('User Data', documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        })
    }

    useEffect(() => {
        getUser();
        console.log(user.uid)
    }, []);
    return (
        <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                    style={styles.userImg}
                    source={{uri: userData ? userData.userImg : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
                />
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                    <Text style={{color: '#000000', fontSize: 20}}>{userData ? userData.name : 'Guest'}</Text>
                    <Text style={{color: '#F72121', fontSize: 16}}>{userData ? userData.email : 'Guest'}</Text>
                </View>
            </View>

            <View style={{width: '100%'}}>
                {data.map((item) => (
                    <TouchableOpacity key={item.id} style={{backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', paddingVertical: 20, margin: 10, borderRadius: 20 }}>
                        <Icon name={item.icon} size={30} style={{paddingHorizontal: 20, color:'#000000'}}/>
                        <Text style={{fontSize: 18, color:'#000000'}}>{item.name}</Text>
                    </TouchableOpacity>                        
                ))}
            </View>
            
            <View style={{width: '80%'}}>
                <Button buttontext="Logout" onPress={()=>logout()}/>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 50
    },
    userImg: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 75,
      },
})
