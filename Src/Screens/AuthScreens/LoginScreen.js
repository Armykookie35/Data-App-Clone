import { View, Text, Image, StyleSheet,SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import images from '../Images';


const LoginScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <Text style={{fontSize:18,textAlign:'center',marginTop:80,fontWeight:'bold'}}>LOGO HERE</Text>
      <Text style={{fontSize:16,textAlign:'center',marginTop:80,color:'green'}}> WELCOME!</Text>
      <Image source={images.hello} style={{height:271,width:311,margin:30}}/>
      <TouchableOpacity style={styles.button}
           onPress={() => navigation.navigate('LoginForm')}
           >
        <Text style={styles.buttonText}>
          Sign in
        </Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center',marginTop:30}}>Already have an account? Login here.</Text>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 72,
    backgroundColor: '#008081',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})