import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const[spinner, setspinner] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        spinner,
        setspinner,
        login: async (email, password) => {
          setspinner(true)
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            alert(e);
          }
          setspinner(false)
        },
        googleLogin: async() => {
          try{
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          }catch(e){
            alert(e)
          }
        },
        register: async (email, password) => {
          setspinner(true)
          try {
            await auth().createUserWithEmailAndPassword(email, password)
          } catch (e) {
            alert(e);
          }
          setspinner(false)
        },
        logout: async () => {
          setspinner(true)
          try {
            await auth().signOut();
          } catch (e) {
            alert(e);
          }
          setspinner(false)
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};