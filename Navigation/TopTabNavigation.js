import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomTabNavigator from '../Navigation/BottomTabNavigator'; 


const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BottomTabNavigator} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
