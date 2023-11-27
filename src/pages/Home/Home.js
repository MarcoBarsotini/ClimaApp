import { 
  View, 
  Text, 
  Button,
  StyleSheet, 
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  Alert
} from 'react-native';
import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Homepage</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2e2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
