import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';

const Stack = createStackNavigator();

export default function App() {
  return (<NavigationContainer>
    <Stack.Navigator initialRoutteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}