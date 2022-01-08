import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

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
          setspinner(true)
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
          setspinner(false)
        },
        facebookLogin: async() => {
          setspinner(true)
            try{
              // Attempt login with permissions
              const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

              if (result.isCancelled) {
                throw 'User cancelled the login process';
              }

              // Once signed in, get the users AccesToken
              const data = await AccessToken.getCurrentAccessToken();

              if (!data) {
                throw 'Something went wrong obtaining access token';
              }

              // Create a Firebase credential with the AccessToken
              const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

              // Sign-in the user with the credential
              await auth().signInWithCredential(facebookCredential);
            }catch(e){
              alert(e)
            }
            setspinner(true)
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