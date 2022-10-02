import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import TvShows from '../screens/TvShows';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => (
    <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {
            textTransform: "capitalize",
            fontSize: 14,
        },
        }}>
            <Tab.Screen name="Movies" component={Movies} />
            <Tab.Screen name="Search Results" component={Search} />
            <Tab.Screen name="TV Shows" component={TvShows} />
        </Tab.Navigator>
);

export default Tabs;