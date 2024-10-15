import { Image,TextInput,TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../Images'
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
    const navigation = useNavigation();
    
  return (
    <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
     <Image source={images.toggle} style={{height:170,width:220,marginTop:150, alignSelf:'center'}}/>
     <Text style={{alignSelf:'center',fontSize:20,marginTop:20,color:'#008081'}}>OTP Verification</Text>
     <Text style={{justifyContent:'center',fontSize:14,textAlign:'center',margin:20}} >We will send you a one-time password to this mobile number.</Text>
     <View style={styles.inputC}>
        <Text style={{color:'#ccc',fontSize:14,marginLeft:60}}>Enter Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="(000) 000-00-00"
          placeholderTextColor={'black'}
          keyboardType="phone-pad"
          textAlign="center"
        />
        </View>
        <TouchableOpacity style={styles.button}
           onPress={() => navigation.navigate('RecievedOTPScreen')}>
        <Text style={styles.buttonText}>
          Send OTP
        </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
    inputC: {
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        width:270,
        height:71,
        marginTop:20,
      },
      input: {
        width: 275,
        height: 45,
        marginLeft:80,
        borderColor: '#008081',
        borderBottomWidth: 1,
        fontSize:22,
        paddingHorizontal: 10,
        alignSelf:'center',
        alignItems:'center',
        borderRadius: 5,
        justifyContent:'center',
   
      },
      button: {
        width: 300,
        height: 72,
        backgroundColor: '#008081',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius: 15,
        marginTop:90,
      },
      buttonText:{
        color: '#fff',
        fontSize: 14,
      },
})