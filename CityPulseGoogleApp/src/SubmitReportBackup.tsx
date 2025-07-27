/**
 * Copyright (c) React Native Community
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function GetCurrentLocationExample() {
  const getUsers = async () => {
    try {
      const users = await firestore().collection('reports').get();
      return users;
    } catch (error) {
      console.log('Firestore error:', error);
      return null;
    }
  };
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        console.log('Current position:', pos);
        getUsers().then(users => {
          console.log('Reports:', users);
        });
        setPosition(JSON.stringify(pos));
        console.log('position:', pos);
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };

  const [position, setPosition] = useState<string | null>(null);

  return (
    <View>
      <Text>
        <Text style={styles.title}>Current position: </Text>
        {position}
      </Text>
      <Button title="Get Current Position" onPress={getCurrentPosition} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});