import { ImageBackground, SafeAreaView,TouchableOpacity, StyleSheet,TextInput, Text, View } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../Images'

const LoginForm = () => {
   const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.Splash} style={styles.image}>
        <Text style={{fontSize:17,color:'white'}}>LOGO HERE</Text>
        <Text style={{fontSize:16,textAlign:'center', marginTop:100,color:'white'}}>CREATE AN ACCOUNT</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#fff"
      
      />
       <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#fff"
        keyboardType="numeric"
      />
       <TextInput
         style={styles.input}
         placeholder="Email Address"
         placeholderTextColor="#fff"
         keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
     
      />
        <TouchableOpacity  style={styles.Button}  onPress={() => navigation.navigate('OTPScreen')}>
          <Text style={styles.buttonText}>
            Sign up
          </Text>
        </TouchableOpacity> 
       
    <Text style={{color:'#fff',marginTop:10,}}>Already have an account? Login here.</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    input: {
        height: 63,
        width:300,
        borderColor: '#ccc',
        borderRadius: 13,
        marginBottom: 12,
        paddingLeft: 8,
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        marginTop:30
        
        
      },
      Button:{
    backgroundColor:'#fff',
    width: 300,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius:15,
    margin:10,
      },
      buttonText:{
        margin:10,
        fontSize: 16,
        color:'#008081',
      },
     
})