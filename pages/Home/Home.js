import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
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
