import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import TvShows from '../screens/TvShows';
import MovieStack from './MovieStack';
import TvStack from './TvStack';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => (
    <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 14,
        },
        }}>
            <Tab.Screen name="Movies" component={MovieStack} />
            <Tab.Screen name="Search Results" component={Search} />
            <Tab.Screen name="TV Shows" component={TvStack} />
        </Tab.Navigator>
);

export default Tabs;