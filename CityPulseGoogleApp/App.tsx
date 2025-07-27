import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Signup from './src/Signup';
import Login from './src/Login';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Dashboard from './src/Dashboard/Dashboard';
import SubmitReport from './src/Dashboard/SubmitReport';

const App: React.FC = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [currentScreen, setCurrentScreen] = useState<'dashboard' | 'submitReport'>('dashboard');

  useEffect(() => {
    async function init() {
      const has = await GoogleSignin.hasPlayServices();
      if (has) {
        GoogleSignin.configure({
          webClientId: '893499848636-tmkqde787fbfgc3h082jnl6imubguat9.apps.googleusercontent.com',
        });
      }
    }
    init();
  }, []);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const onLogout = () => {
    signOut();
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(error => console.error('Error signing out:', error));
  };

  if (initializing) return <></>;
  console.log('user: ', user);

  if (!!user) {
    return (
      <View style={styles.container}>
        {/* Main Content Area */}
        <View style={styles.contentArea}>
          {currentScreen === 'dashboard' ? <Dashboard /> : <SubmitReport />}
        </View>
        
        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity 
            style={[
              styles.navButton, 
              currentScreen === 'dashboard' && styles.activeNavButton
            ]} 
            onPress={() => setCurrentScreen('dashboard')}
          >
            <Text style={[
              styles.navButtonText,
              currentScreen === 'dashboard' && styles.activeNavButtonText
            ]}>
              Dashboard
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.navButton, 
              currentScreen === 'submitReport' && styles.activeNavButton
            ]} 
            onPress={() => setCurrentScreen('submitReport')}
          >
            <Text style={[
              styles.navButtonText,
              currentScreen === 'submitReport' && styles.activeNavButtonText
            ]}>
              Submit Report
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      {isSignup ? (
        <Signup onSwitchToLogin={() => setIsSignup(false)} />
      ) : (
        <Login onSwitchToSignup={() => setIsSignup(true)} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentArea: {
    flex: 1,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    minWidth: 80,
    alignItems: 'center',
  },
  activeNavButton: {
    backgroundColor: '#6200ea',
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeNavButtonText: {
    color: '#ffffff',
  },
  logoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#ff4444',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  userContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  emailText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
});

export default App;
