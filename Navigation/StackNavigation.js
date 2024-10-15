import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigator from '../Navigation/TopTabNavigation'; // Import the top tab navigator
import HomeScreen from '../Src/Screens/MainScreens/HomeScreen';
import SplashScreen from './../Src/Screens/IntroScreens/SplashScreen';
import IntroSlider from './../Src/Screens/IntroScreens/IntroSlider';
import LoginScreen from './../Src/Screens/AuthScreens/LoginScreen';
import LoginForm from './../Src/Screens/AuthScreens/LoginForm';
import OTPScreen from '../Src/Screens/AuthScreens/OTPScreen';
import RecievedOTPScreen from '../Src/Screens/AuthScreens/RecievedOTPScreen';
import WelcomeScreen from '../Src/Screens/AuthScreens/WelcomeScreen';
import DetailsScreen from '../Src/Screens/AuthScreens/DetailsScreen';
import Continue from '../Src/Screens/AuthScreens/Continue';
import Pin from '../Src/Screens/AuthScreens/Pin';
import Email from '../Src/Screens/AuthScreens/Email';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="IntroSlider" component={IntroSlider} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Main" component={TopTabNavigator} /> 
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="RecievedOTPScreen" component={RecievedOTPScreen}/>
      <Stack.Screen name="WelcomeScreen"  component={WelcomeScreen}/>
      <Stack.Screen name="DetailsScreen"  component={DetailsScreen}/>
      <Stack.Screen name="Continue" component={Continue}/>
      <Stack.Screen name="Pin" component={Pin}/>
      <Stack.Screen name="Email" component={Email}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
