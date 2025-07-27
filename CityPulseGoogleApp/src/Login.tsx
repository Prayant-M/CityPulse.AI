import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

interface LoginProps {
  onSwitchToSignup: () => void;
}

const Login: React.FC<LoginProps> = ({onSwitchToSignup}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    async function init() {
      const has = await GoogleSignin.hasPlayServices();
      if (has) {
        GoogleSignin.configure({
              webClientId: '893499848636-tmkqde787fbfgc3h082jnl6imubguat9.apps.googleusercontent.com', // From Firebase Console
              offlineAccess: true, 
              profileImageSize: 120,
            });
      }
    }
    init();
  }, []);

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        Alert.alert('Success', 'Logged in successfully!');
      })
      .catch(error => {
        let errorMessage = 'Login failed';
        
        if (error.code === 'auth/user-not-found') {
          errorMessage = 'No user found for that email.';
        } else if (error.code === 'auth/wrong-password') {
          errorMessage = 'Incorrect password.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Invalid email address.';
        } else if (error.code === 'auth/user-disabled') {
          errorMessage = 'User account has been disabled.';
        }

        Alert.alert('Error', errorMessage);
        console.error(error);
      });
  };
  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Obtain the user's ID token
      const data: any = await GoogleSignin.signIn();

      // create a new firebase credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        data?.data.idToken,
      );

      console.log('credential: ', googleCredential);
      // login with credential
      await auth().signInWithCredential(googleCredential);
      Alert.alert('Success', 'Signed in with Google successfully!');

      return;
    } catch (e) {
      console.log('Google login error: ', e);
      Alert.alert('Error', 'Google sign in failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles?.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <View style={styles.divider}>
        <Text style={styles.dividerText}>OR</Text>
      </View>
      
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
      
      <TouchableOpacity onPress={onSwitchToSignup} style={styles.switchButton}>
        <Text style={styles.switchButtonText}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor: '#C8C8C8',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 20,
    alignItems: 'center',
  },
  dividerText: {
    color: '#666',
    fontSize: 14,
  },
  googleButton: {
    width: '80%',
    height: 48,
    marginBottom: 20,
  },
  switchButton: {
    marginTop: 15,
    marginBottom: 15,
  },
  switchButtonText: {
    color: '#6200ea',
    fontSize: 14,
  },
  heading: {
    fontSize: 30,
    margin: 10,
  },
});

export default Login;