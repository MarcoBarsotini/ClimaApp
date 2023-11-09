import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text> Navegar</Text>
          </TouchableOpacity>
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
