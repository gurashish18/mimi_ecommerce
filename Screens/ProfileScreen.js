import React, {useContext, useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import {AuthContext} from '../nav/AuthProvider'
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';

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
    {
        id:4,
        name: 'Share',
        icon: 'share',
        destination: ''
    },
]

const ProfileScreen = () => {
    const navigation = useNavigation()
    const {user, logout} = useContext(AuthContext)
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
        await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((documentSnapshot) => {
          if( documentSnapshot.exists ) {
            setUserData(documentSnapshot.data());
          }
        })
    }

    useEffect(() => {
        getUser();
    }, []);
    return (
        // <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
        //     <View style={{alignItems: 'center', justifyContent: 'center'}}>
        //         <Image
        //             style={styles.userImg}
        //             source={{uri: userData ? userData.userImg : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
        //         />
        //         <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
        //             <Text style={{color: '#000000', fontSize: 20}}>{userData ? userData.name : 'Guest'}</Text>
        //             <Text style={{color: '#F72121', fontSize: 16}}>{userData ? userData.email : 'Guest'}</Text>
        //         </View>
        //     </View>

        //     <View style={{width: '100%'}}>
        //         {data.map((item) => (
        //             <TouchableOpacity key={item.id} style={{backgroundColor: '#eeeeee', flexDirection: 'row', alignItems: 'center', paddingVertical: 20, margin: 10, borderRadius: 20 }}>
        //                 <Icon name={item.icon} size={30} style={{paddingHorizontal: 20, color:'#000000'}}/>
        //                 <Text style={{fontSize: 18, color:'#000000'}}>{item.name}</Text>
        //             </TouchableOpacity>                        
        //         ))}
        //     </View>
            
        //     <View style={{width: '80%'}}>
        //         <Button buttontext="Logout" onPress={()=>logout()}/>
        //     </View>
        // </ScrollView>

        <ScrollView style={{backgroundColor: '#ffffff'}} contentContainerStyle={styles.container}>
            <View style={{height: '25%', backgroundColor: '#000000', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, justifyContent: 'center'}}>
                <Text style={{color: '#ffffff', fontSize: 30, fontWeight: 'bold', marginLeft: 20}}>Profile</Text>
            </View>

            <View style={{position: 'absolute', top: '15%', left: '30%'}}>
                <Image
                     style={styles.userImg}
                     source={{uri: userData ? userData.userImg : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
                 />

            </View>
            
            <ScrollView style={{position: 'absolute', top: '35%', width: '80%',alignSelf: 'center', borderRadius: 20}}>
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 40}}>
                     <Text style={{color: '#424242', fontSize: 20, fontWeight: 'bold'}}>{userData ? userData.name : 'Guest'}</Text>
                     <Text style={{color: '#9e9e9e', fontSize: 14}}>{userData ? userData.email : 'Guest'}</Text>
                </View>
                 {data.map((item) => (
                     <TouchableOpacity key={item.id} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon name={item.icon} size={20} style={{paddingHorizontal: 20, color:'#616161'}}/>
                            <Text style={{fontSize: 18, color:'#616161'}}>{item.name}</Text>
                        </View>
                        <Icon name="chevron-right" color={'#616161'} size={20}/>
                     </TouchableOpacity>                        
                 ))}

                 <TouchableOpacity onPress={()=>logout()} style={{flexDirection: 'row', backgroundColor: 'red', width: '50%', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', borderRadius: 10, paddingVertical: 15}}>
                    <Icon name="logout" color={'#ffffff'} size={20}/>
                    <Text style={{color: '#ffffff'}}>Logout</Text>
                </TouchableOpacity>
             </ScrollView>

        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // marginVertical: 50
    },
    userImg: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        borderRadius: 75,
    },
    card: {
        position: 'absolute', 
        borderWidth: 1, 
        top: '40%', 
        width: '80%',
        alignSelf: 'center', 
        borderRadius: 20
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
})
