import { StatusBar, StyleSheet, useColorScheme, View, Text, Alert, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { GoogleAuthProvider, getAuth, signInWithCredential, createUserWithEmailAndPassword, signOut } from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  isErrorWithCode,
  isSuccessResponse,
} from "@react-native-google-signin/google-signin";
import React, { use, useEffect, useState } from "react";

function App() {

  useEffect(() => {
    // Configure Google Sign-In
    GoogleSignin.configure({
      webClientId: '893499848636-tmkqde787fbfgc3h082jnl6imubguat9.apps.googleusercontent.com', // From Firebase Console
      offlineAccess: true, 
      profileImageSize: 120,
    });
  }, []);


  const isDarkMode = useColorScheme() === 'dark';

  const emailSignIn = () => {
    createUserWithEmailAndPassword(getAuth(), 'jane.doe@example.com', 'SuperSecretPassword!')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
  };

  const signOutUser = () => {
    signOut(getAuth()).then(() => {
      console.log('User signed out!');
      Alert.alert("Success", "Signed out successfully!");
    }).catch(error => {
      console.error('Sign out error:', error);
      Alert.alert("Error", "Failed to sign out");
    });
  };

  const signOut1 = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

const signIn = async () => {
    try {
      // Check if device supports Google Play services
      await GoogleSignin.hasPlayServices();
      
      // Sign in
      const response = await GoogleSignin.signIn();
      
      if (isSuccessResponse(response)) {
        console.log("User Info:", response.data);
        Alert.alert("Success", "Signed in successfully!");
        
        // Get the ID token for Firebase auth
        const idToken = response.data?.idToken;
        if (idToken) {
          // Create Firebase credential and sign in
          const googleCredential = GoogleAuthProvider.credential(idToken);
          const firebaseUser = await signInWithCredential(getAuth(), googleCredential);
          console.log("Firebase User:", firebaseUser.user);
        }
      } else {
        Alert.alert("Sign-in cancelled", "User cancelled the sign-in process");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            Alert.alert("In Progress", "Sign-in is already in progress");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            Alert.alert("Error", "Google Play services not available or outdated");
            break;
          default:
            Alert.alert("Error", `Sign-in failed: ${error.code}`);
        }
      } else {
        Alert.alert("Error", "An unexpected error occurred during sign-in");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: isDarkMode ? 'white' : 'black', textAlign: 'center', marginTop: 20 }}>
        Welcome to the City Pulse App!
      </Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48, marginTop: 20, alignSelf: 'center' }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={false}
      />
      <Button
        title="Sign in with Email"
        onPress={() => {
          createUserWithEmailAndPassword(getAuth(), 'hello12456.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        }}
      />
      <Button
        title="Sign Out"
        onPress={signOut1}
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
