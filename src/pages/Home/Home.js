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
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Homepage</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005bc5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
