import React, {useState, useEffect} from 'react';
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

interface SignupProps {
  onSwitchToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({onSwitchToLogin}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    async function init() {
      const has = await GoogleSignin.hasPlayServices();
      if (has) {
        GoogleSignin.configure({
          webClientId: '893499848636-tmkqde787fbfgc3h082jnl6imubguat9.apps.googleusercontent.com',
          offlineAccess: true, 
          profileImageSize: 120,
        });
      }
    }
    init();
  }, []);

  const onSignup = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Alert.alert('Success', 'Account created successfully!');
      })
      .catch(error => {
        let errorMessage = 'Sign up failed';
        
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'That email address is already in use!';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'That email address is invalid!';
        } else if (error.code === 'auth/weak-password') {
          errorMessage = 'Password should be at least 6 characters';
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
      // Sign up with credential
      await auth().signInWithCredential(googleCredential);
      Alert.alert('Success', 'Signed up with Google successfully!');

      return;
    } catch (e) {
      console.log('Google signup error: ', e);
      Alert.alert('Error', 'Google sign up failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign up</Text>
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
      <TouchableOpacity style={styles.button} onPress={onSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
            console.log('Signed up with Google!'),
          )
        }
      />
      
      <TouchableOpacity onPress={onSwitchToLogin} style={styles.switchButton}>
        <Text style={styles.switchButtonText}>
          Already have an account? Log In
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
    color:'black',
    backgroundColor:'#C8C8C8'
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

export default Signup;