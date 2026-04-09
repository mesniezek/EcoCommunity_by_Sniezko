import LoginScreen from './app/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginEnterScreen from './app/screens/LoginEnterScreen';

export type RootStackParamList = {
  Login: undefined;
  LoginEnter: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="LoginEnter" component={LoginEnterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <LoginScreen />
  );
}