import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from '../Navigation/StackNavigation'; 
import ProfileScreen from '../Src/Screens/MainScreens/ProfileScreen';
import SettingsScreen from '../Src/Screens/CommonScreens/SettingsScreen';
import HomeScreen from './../Src/Screens/MainScreens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
