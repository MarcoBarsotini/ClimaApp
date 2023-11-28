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
  
    export default function ProfileScreen() {
        return (
            <View style={styles.container}>
                <Text>Profile Page</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#099CFA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
});
  