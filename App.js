import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Routes from './src/routes/Router'

export default function App() {
  return (
    <Routes/>
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
