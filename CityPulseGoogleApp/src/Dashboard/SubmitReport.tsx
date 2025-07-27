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
import { 
  StyleSheet, 
  Text, 
  View, 
  Alert, 
  Button, 
  TextInput, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  ActivityIndicator,
  Modal 
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { launchImageLibrary, launchCamera, MediaType, ImagePickerResponse } from 'react-native-image-picker';

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export default function SubmitReportForm() {
  const [description, setDescription] = useState<string>('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isGettingLocation, setIsGettingLocation] = useState<boolean>(false);
  const [uploadStatus, setUploadStatus] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [customCategory, setCustomCategory] = useState<string>('');
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);

  const categoryOptions = [
    'Fire Related',
    'Flooding/Water Related', 
    'Flash Mob/Protest',
    'Other: Specify'
  ];

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setShowCategoryModal(false);
    
    // Clear custom category if not "Other: Specify"
    if (selectedCategory !== 'Other: Specify') {
      setCustomCategory('');
    }
  };

  const getFinalCategory = () => {
    if (category === 'Other: Specify' && customCategory.trim()) {
      return `Other: ${customCategory.trim()}`;
    }
    return category;
  };

  const getCurrentLocation = async (): Promise<LocationData | null> => {
    return new Promise((resolve, reject) => {
      setIsGettingLocation(true);
      Geolocation.getCurrentPosition(
        (position) => {
          const locationData: LocationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp
          };
          setLocation(locationData);
          setIsGettingLocation(false);
          resolve(locationData);
        },
        (error) => {
          console.log('Location error:', error);
          setIsGettingLocation(false);
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  };

  const selectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    Alert.alert(
      'Select Image',
      'Choose an option',
      [
        { text: 'Camera', onPress: () => openCamera() },
        { text: 'Gallery', onPress: () => openGallery() },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: ImagePickerResponse) => {
      if (response.didCancel || response.errorMessage) {
        console.log('Camera cancelled or error');
        return;
      }
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo' as MediaType,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel || response.errorMessage) {
        console.log('Gallery cancelled or error');
        return;
      }
      if (response.assets && response.assets[0]) {
        setImageUri(response.assets[0].uri || null);
      }
    });
  };

  // const uploadImageToStorage = async (imageUri: string): Promise<string> => {
  //   try {
  //     setUploadStatus('Uploading image...');
      
  //     // Create a unique filename
  //     const filename = `reports/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
      
  //     // Create a reference to Firebase Storage
  //     const reference = storage().ref(filename);
      
  //     // Upload the file
  //     const uploadTask = reference.putFile(imageUri);
      
  //     // Wait for upload to complete
  //     await uploadTask;
      
  //     setUploadStatus('Getting image URL...');
      
  //     // Get download URL
  //     const downloadURL = await reference.getDownloadURL();
      
  //     console.log('Image uploaded successfully:', downloadURL);
  //     setUploadStatus('');
  //     return downloadURL;
      
  //   } catch (error) {
  //     console.log('Image upload error:', error);
  //     setUploadStatus('');
  //     throw new Error('Failed to upload image');
  //   }
  // };

  // ...existing code...
  // const uploadImageToStorage = async (imageUri: string): Promise<string> => {
  //   try {
  //     setUploadStatus('Uploading image...');
      
  //     // Create a unique filename
  //     const filename = `reportsImage/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
      
  //     // Create a reference to Firebase Storage
  //     const reference = storage().ref(filename);
      
  //     console.log('Starting upload to:', filename);
  //     console.log('Image URI:', imageUri);
      
  //     // Upload the file and wait for completion
  //     const uploadTask = reference.putFile(imageUri);
      
  //     // Monitor upload progress (optional)
  //     uploadTask.on('state_changed', 
  //       (snapshot) => {
  //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log('Upload progress:', progress + '%');
  //         setUploadStatus(`Uploading... ${Math.round(progress)}%`);
  //       },
  //       (error) => {
  //         console.log('Upload progress error:', error);
  //       }
  //     );
      
  //     // Wait for upload to complete
  //     const uploadResult = await uploadTask;
  //     console.log('Upload completed:', uploadResult.state);
      
  //     // Verify upload was successful
  //     if (uploadResult.state !== 'success') {
  //       throw new Error('Upload did not complete successfully');
  //     }
      
  //     setUploadStatus('Getting image URL...');
      
  //     // Small delay to ensure the object is available
  //     await new Promise(resolve => setTimeout(resolve, 1000));
      
  //     // Get download URL
  //     const downloadURL = await reference.getDownloadURL();
      
  //     console.log('Image uploaded successfully:', downloadURL);
  //     setUploadStatus('');
  //     return downloadURL;
      
  //   } catch (error) {
  //     console.log('Image upload error:', error);
  //     setUploadStatus('');
      
  //     // More specific error messages
  //     const errorWithCode = error as { code?: string; message?: string };
  //     if (errorWithCode.code === 'storage/object-not-found') {
  //       throw new Error('Upload failed - file not found after upload');
  //     } else if (errorWithCode.code === 'storage/unauthorized') {
  //       throw new Error('Upload failed - unauthorized access');
  //     } else if (errorWithCode.code === 'storage/canceled') {
  //       throw new Error('Upload was canceled');
  //     } else if (errorWithCode.code === 'storage/unknown') {
  //       throw new Error('Upload failed - unknown error occurred');
  //     } else {
  //       throw new Error(`Upload failed: ${errorWithCode.message || 'Unknown error'}`);
  //     }
  //   }
  // };

    const uploadImageToStorage = async (imageUri: string): Promise<string> => {
    try {
      setUploadStatus('Uploading image...');
      
      // Create a unique filename
      const filename = `reportsImages/${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
      
      // Create a reference to Firebase Storage
      const reference = storage().ref(filename);
      
      console.log('Starting upload to:', filename);
      console.log('Image URI:', imageUri);
      
      // Simple upload without progress monitoring
      await reference.putFile(imageUri);
      
      console.log('Upload completed successfully');
      
      setUploadStatus('Getting image URL...');
      
      // Get download URL directly after upload
      const downloadURL = await reference.getDownloadURL();
      
      console.log('Image uploaded successfully:', downloadURL);
      setUploadStatus('');
      return downloadURL;
      
    } catch (error) {
      console.log('Image upload error:', error);
      setUploadStatus('');
      
      // More specific error messages
      const errorWithCode = error as { code?: string; message?: string };
      
      if (errorWithCode.code === 'storage/unauthorized') {
        throw new Error('Upload failed - Please check Firebase Storage permissions');
      } else if (errorWithCode.code === 'storage/canceled') {
        throw new Error('Upload was canceled');
      } else if (errorWithCode.code === 'storage/invalid-argument') {
        throw new Error('Invalid image file');
      } else if (errorWithCode.code === 'storage/object-not-found') {
        throw new Error('Upload failed - Please try again');
      } else {
        throw new Error(`Upload failed: ${errorWithCode.message || 'Unknown error'}`);
      }
    }
  };

  const submitReport = async () => {
    // Validation
    if (!category) {
      Alert.alert('Error', 'Please select a category');
      return;
    }

    if (category === 'Other: Specify' && !customCategory.trim()) {
      Alert.alert('Error', 'Please specify the custom category');
      return;
    }

    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a description');
      return;
    }

    if (!imageUri) {
      Alert.alert('Error', 'Please select an image');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get current location
      let currentLocation = location;
      if (!currentLocation) {
        try {
          currentLocation = await getCurrentLocation();
        } catch (error) {
          Alert.alert('Location Error', 'Could not get current location. Please try again.');
          setIsSubmitting(false);
          return;
        }
      }

      // Upload image to Firebase Storage and get download URL
      setUploadStatus('Uploading image...');
      const imageDownloadURL = await uploadImageToStorage(imageUri);

      // Create report data with the download URL
      setUploadStatus('Saving report...');
      const reportData = {
        category: getFinalCategory(),
        description: description.trim(),
        imageUrl: imageDownloadURL, // Using download URL instead of local URI
        location: {
          latitude: currentLocation?.latitude,
          longitude: currentLocation?.longitude,
          accuracy: currentLocation?.accuracy
        },
        securityGuardrailCheck: {
          status: 'pending',
          checkedAt: null,
          checkedBy: null,
          flagged: false,
          reasons: []
        },
        adminValidations: {
          status: 'pending',
          validatedAt: null,
          validatedBy: null,
          approved: false,
          rejectionReason: null,
          notes: ''
        },
        timestamp: firestore.FieldValue.serverTimestamp(),
        createdAt: new Date().toISOString()
      };

      // Submit to Firestore
      await firestore().collection('reports').add(reportData);
      
      setUploadStatus('');
      Alert.alert(
        'Success', 
        'Report submitted successfully!',
        [{ text: 'OK', onPress: () => resetForm() }]
      );

    } catch (error) {
      console.log('Submit error:', error);
      setUploadStatus('');
      Alert.alert('Error', 'Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setDescription('');
    setImageUri(null);
    setLocation(null);
    setUploadStatus('');
    setCategory('');
    setCustomCategory('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Submit Report</Text>

        {/* Category Selection */}
        <View style={styles.categorySection}>
          <Text style={styles.label}>Category *</Text>
          <TouchableOpacity 
            style={styles.categoryButton} 
            onPress={() => setShowCategoryModal(true)}
          >
            <Text style={[styles.categoryButtonText, !category && styles.placeholderText]}>
              {category || 'Select a category'}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          
          {/* Custom Category Input - Only show if "Other: Specify" is selected */}
          {category === 'Other: Specify' && (
            <TextInput
              style={styles.customCategoryInput}
              placeholder="Please specify the category..."
              value={customCategory}
              onChangeText={setCustomCategory}
            />
          )}
        </View>

        {/* Image Selection */}
        <View style={styles.imageSection}>
          <Text style={styles.label}>Photo *</Text>
          <TouchableOpacity style={styles.imageButton} onPress={selectImage}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.selectedImage} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imagePlaceholderText}>Tap to select image</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Description Input */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>Description *</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Describe the issue or incident..."
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
          />
        </View>

        {/* Location Section */}
        <View style={styles.locationSection}>
          <Text style={styles.label}>Location</Text>
          <TouchableOpacity 
            style={styles.locationButton} 
            onPress={getCurrentLocation}
            disabled={isGettingLocation}
          >
            {isGettingLocation ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.locationButtonText}>
                {location ? 'Update Location' : 'Get Current Location'}
              </Text>
            )}
          </TouchableOpacity>
          
          {location && (
            <View style={styles.locationDisplay}>
              <Text style={styles.locationText}>
                📍 Lat: {location.latitude.toFixed(6)}
              </Text>
              <Text style={styles.locationText}>
                📍 Lng: {location.longitude.toFixed(6)}
              </Text>
              <Text style={styles.locationText}>
                🎯 Accuracy: {location.accuracy.toFixed(0)}m
              </Text>
            </View>
          )}
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]} 
          onPress={submitReport}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <View style={styles.submitButtonLoading}>
              <ActivityIndicator color="#ffffff" size="small" />
              <Text style={[styles.submitButtonText, {marginLeft: 10}]}>
                {uploadStatus || 'Submitting...'}
              </Text>
            </View>
          ) : (
            <Text style={styles.submitButtonText}>Submit Report</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* Category Selection Modal */}
      <Modal
        visible={showCategoryModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCategoryModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Category</Text>
            
            {categoryOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryOption}
                onPress={() => handleCategorySelect(option)}
              >
                <Text style={styles.categoryOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowCategoryModal(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  imageSection: {
    marginBottom: 25,
  },
  imageButton: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: '#666',
    fontSize: 16,
  },
  inputSection: {
    marginBottom: 25,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    minHeight: 100,
  },
  locationSection: {
    marginBottom: 25,
  },
  locationButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  locationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  locationDisplay: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontFamily: 'monospace',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonDisabled: {
    backgroundColor: '#ccc',
  },
  submitButtonLoading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categorySection: {
    marginBottom: 25,
  },
  categoryButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fff',
  },
  categoryButtonText: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    color: '#999',
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#666',
  },
  customCategoryInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  categoryOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryOptionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  cancelButton: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontWeight: '600',
  },
});