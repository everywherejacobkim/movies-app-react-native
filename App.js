import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import Tabs from './src/navigation/Tabs';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Header />
        <Tabs />
      </NavigationContainer>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
