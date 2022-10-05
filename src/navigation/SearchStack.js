import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const MovieStack = () => (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search} options={{headerShown: false}}/>
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
)

export default MovieStack;