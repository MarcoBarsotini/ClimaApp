import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home/Home.js";

const Stack = createStackNavigator();

export default function App() {
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
}