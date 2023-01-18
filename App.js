import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView, TextInput,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LandingScreen} from './src/screens/LandingScreen'
import {RegistrationScreen} from './src/screens/RegistrationScreen'
import { CreateAccountScreen } from './src/screens/CreateAccountScreen';


const myStack= () => {
return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}}/>
    <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
</NavigationContainer>
);
}

export default function App() {
return (
  myStack()
);
}
const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
