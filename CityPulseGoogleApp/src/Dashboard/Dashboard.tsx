import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import MapView, {Region, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Dashboard: React.FC = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.7749, // Default to San Francisco
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{latitude: number; longitude: number} | null>(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('Current position for map:', position);
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        
        setUserLocation(newLocation);
        setLoading(false);
      },
      (error) => {
        console.log('Map location error:', error);
        Alert.alert(
          'Location Error',
          'Could not get your location. Showing default location.',
          [{text: 'OK'}]
        );
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={false}
        showsMyLocationButton={true}
        followsUserLocation={false}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Your Location"
            description="You are here"
            pinColor="blue"
          />
        )}
      </MapView>
      {loading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading your location...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Dashboard;
