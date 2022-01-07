import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,Button,} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
    const navigation = useNavigation()
    const onDone = () => {
      navigation.navigate("Login")
    };
    const onSkip = () => {
      navigation.navigate("Login")
    };
    const RenderItem = ({item}) => {
        return (
              <View style={{flex: 1, backgroundColor: item.backgroundColor,alignItems: 'center',justifyContent: 'center'}}>
                <Image style={styles.introImageStyle} source={item.image} />
                <View style={{padding: 5, alignItems: 'center', marginTop: 50}}>
                  <Text style={{color: '#000000', fontSize: 25, alignSelf: 'center', textAlign: 'center'}}>{item.title}</Text>
                  <Text style={{color: '#e0e0e0', fontSize: 16, fontWeight: '400', alignSelf: 'center', marginTop: 10, textAlign: 'center'}}>{item.text}</Text>
                </View>
              </View>
        );
      };
    
    
      const RenderSkipButton = () => {
        return (
            <View style={{paddingVertical:5, paddingHorizontal: 10}}>
              <Text style={{color: 'grey', fontSize: 18}}>Skip</Text>
            </View>
        );
      };
    
      const RenderNextButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10}}>
                <Text style={{color: 'grey', fontSize: 18}}>Next</Text>
                <Icon name="arrow-right-alt" style={{color: 'grey', fontSize: 30}}/>
              </View>
        );
      };
    
      const RenderDoneButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10}}>
                <Text style={{color: 'grey', fontSize: 18}}>Done</Text>
                <Icon name="done" style={{color: 'grey', fontSize: 30}}/>
              </View>
        );
      };
    return (
        <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
                renderNextButton={RenderNextButton}
                renderSkipButton={RenderSkipButton}
                renderDoneButton={RenderDoneButton}
                dotStyle={{width: 20, backgroundColor: 'lightgrey'}}
                activeDotStyle={{width: 30, backgroundColor: '#F72121'}}
        />
    )
}

export default OnboardScreen

const styles = StyleSheet.create({
    introImageStyle: {
        maxWidth: 350,
        maxHeight: 350, 
        resizeMode: 'contain'
      },
      introTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 30,
      }
})

const slides = [
    {
      key: '1',
      text: '',
      title: 'Follow Trends',
      image: require('../assets/mimi_logo.png'),
      backgroundColor: '#ffffff',
    },
    {
      key: '2',
      text: '',
      title: 'Easy Shoping',
      image: require('../assets/mimi_logo.png'),
      backgroundColor: '#ffffff',
    },
]
