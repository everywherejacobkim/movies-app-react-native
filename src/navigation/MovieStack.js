import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from '../screens/Movies';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const MovieStack = () => (
        <Stack.Navigator>
            <Stack.Screen name='Movies-today' component={Movies} options={{headerShown: false}}/>
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
)

export default MovieStack;