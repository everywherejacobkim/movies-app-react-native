import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TvShows from '../screens/TvShows';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const TvStack = () => (
        <Stack.Navigator>
            <Stack.Screen name='Movies' component={TvShows} options={{headerShown: false}}/>
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
)

export default TvStack;