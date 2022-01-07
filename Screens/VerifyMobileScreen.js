import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Button from '../components/Button'

const VerifyMobileScreen = () => {
    const [otp, setotp] = useState('')
    const [confirm, setConfirm] = useState(null);
     // useEffect(() => {
    //   signInWithPhoneNumber();
    // }, [])

    // async function signInWithPhoneNumber() {
    //   setspinner(true)
    //   try{
    //      const code = '+91'
    //      const pno = code.concat(" ", phoneNumber)
    //      console.log(pno)
    //      const confirmation = await auth().signInWithPhoneNumber(pno);
    //      setConfirm(confirmation);
    //    }catch(e){
    //       console.log(e)
    //   }
    //   setspinner(false)
    //  }
    //  async function confirmCode() {
    //   setspinner(true)
    //   try{
    //     const response = await confirm.confirm(otp);
    //     if(response){
    //       navigation.navigate("BottomTab")
    //     }
    //   } catch(e){
    //       console.log(e)
    //   }
    //   setspinner(false)
    // }
    return (
        <View style={{flex:1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20}}>
            <Text style={{fontSize: 30, color: '#000000', fontWeight: 'bold'}}>Verify Details</Text>
            <Text style={{fontSize: 20, marginVertical: 20}}>Enter code sent to 9729756418</Text>
            <OTPInputView
                style={{width: '80%', height: 200, color: '#000000'}}
                pinCount={6}
                code={otp}
                onCodeChanged = {code => setotp(code)}
                autoFocusOnLoad
                codeInputFieldStyle={{...styles.underlineStyleBase, borderColor: '#000000'}}
                codeInputHighlightStyle={{borderColor: '#F72121'}}
                onCodeFilled = {code => {} }
            />
            <Button buttontext="Verify"/>
        </View>
    )
}

export default VerifyMobileScreen

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
      },
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
})
