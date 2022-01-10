import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';

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
            await auth().signInWithCredential(googleCredential)
            .then(() => {
              //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              firestore().collection('users').doc(auth().currentUser.uid)
              .set({
                  name: auth().currentUser.displayName,
                  email: auth().currentUser.email,
                  mobile: auth().currentUser.phoneNumber,
                  createdAt: firestore.Timestamp.fromDate(new Date()),
                  userImg: auth().currentUser.photoURL,
              })
              //ensure we catch any errors at this stage to advise us if something does go wrong
              .catch(error => {
                  console.log('Something went wrong with added user to firestore: ', error);
              })
            })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });

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
              await auth().signInWithCredential(facebookCredential)
              .then(() => {
              //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              firestore().collection('users').doc(auth().currentUser.uid)
                .set({
                    name: auth().currentUser.displayName,
                    email: auth().currentUser.email,
                    mobile: auth().currentUser.phoneNumber,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: auth().currentUser.photoURL,
                })
                //ensure we catch any errors at this stage to advise us if something does go wrong
                .catch(error => {
                    console.log('Something went wrong with added user to firestore: ', error);
                })
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                  console.log('Something went wrong with sign up: ', error);
              });
            }catch(e){
              alert(e)
            }
            setspinner(true)
        },
        register: async (email, password, name, mobile) => {
          setspinner(true)
          try {
            await auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              firestore().collection('users').doc(auth().currentUser.uid)
              .set({
                  name: name,
                  email: email,
                  mobile: mobile,
                  createdAt: firestore.Timestamp.fromDate(new Date()),
                  userImg: 'https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png',
              })
              //ensure we catch any errors at this stage to advise us if something does go wrong
              .catch(error => {
                  console.log('Something went wrong with added user to firestore: ', error);
              })
            })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
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