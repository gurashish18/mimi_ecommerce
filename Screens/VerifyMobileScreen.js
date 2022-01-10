import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Button from '../components/Button'
import auth from '@react-native-firebase/auth';

const VerifyMobileScreen = ({ route: { params: { name, email, mobile, password } }}) => {
    const [otp, setotp] = useState('')
    const [confirm, setConfirm] = useState(null);

     useEffect(() => {
      verifyPhoneNumber()
    }, [])

    async function verifyPhoneNumber() {
      const code = '+91'
      const pno = code.concat(" ", mobile)
      const confirmation = await auth().verifyPhoneNumber(pno);
      setConfirm(confirmation);
    }

    async function createUserWithEmailAndPassword() {
      try{
         await auth().createUserWithEmailAndPassword(email ,password);
       }catch(e){
          console.log(e)
      }
     }
     async function confirmCode() {
      try{
        const response = await confirm.confirm(otp);
        if(response){
          createUserWithEmailAndPassword()
          alert("Successful verify")
        }
      } catch(e){
          console.log(e)
      }
    }
    return (
        <View style={{flex:1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20}}>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>Enter code sent to +91 {mobile}</Text>
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
            <Button buttontext="Verify" onPress={()=>confirmCode()}/>
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
