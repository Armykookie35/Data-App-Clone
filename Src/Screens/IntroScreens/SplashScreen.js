// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import images from '../Images';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
   
    const timer = setTimeout(() => {
      navigation.navigate('IntroSlider');
    }, 3000);
lone

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={images.Splash} 
        style={styles.image} 
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
   
    alignSelf:'center',
    marginBottom: 20,
    // marginTop:500,
  },
 
});

export default SplashScreen;
