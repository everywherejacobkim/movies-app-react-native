import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from '../screens/Movies';

const NativeStack = createNativeStackNavigator();

const moviesStack = ({navigation: { navigate }}) => (
    <Movies />
)
const tvShowsStack = ({navigation: { navigate }}) => (
    <TouchableOpacity onPress={()=> navigate("Three")}>
        <Text>Go to Three</Text>
    </TouchableOpacity>
)

const Stack = () => (
    <NativeStack.Navigator screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "#007f53",
        presentation: "card",
        headerShown: false,
    }}>
        <NativeStack.Screen name='One' component={moviesStack} />
        <NativeStack.Screen name='Two' component={tvShowsStack} />
    </NativeStack.Navigator>
)

export default Stack;
``