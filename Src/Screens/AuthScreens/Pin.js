import React from 'react';
import { StyleSheet, Text, Image, View,TextInput,TouchableOpacity, SafeAreaView } from 'react-native';
import images from '../Images';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const Pin = () => {
 const navigation = useNavigation();
   const [pin, setPin] = useState(["", "", "", ""]);

  const handlePinChange = (value, index) => {
   
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>LOGO HERE</Text>
      <Image source={images.amico} style={styles.image} />
      <Text style={styles.descriptionText}>
        Set your transaction Pin now, it will be required of you to complete all your transactions. Enter 4 digits below to continue.
      </Text>
      <View style={styles.pinContainer}>
        {pin.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(value) => handlePinChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
            style={styles.pinInput}
          />
          
        ))}
      </View>
      <TouchableOpacity  style={styles.Button}  onPress={() => navigation.navigate('Email')}>
            <Text style={styles.buttonText}>
              Continue
            </Text>
          </TouchableOpacity> 
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
   pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  pinInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 80,
    fontWeight: 'bold',
  },
  image: {
    height: 151,
    width: 150,
    marginTop: 100,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
    paddingHorizontal: 20, // Added horizontal padding for better readability
  },
  Button:{
    backgroundColor:'#008081',
    width: 300,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius:15,
    marginTop:100
   
      },
      buttonText:{
        margin:10,
        fontSize: 14,
        color:'#fff',
      },
});

export default Pin;
