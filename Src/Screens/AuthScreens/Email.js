import { Image,TextInput,TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../Images'
import { useNavigation } from '@react-navigation/native';

const Email = () => {
    const navigation = useNavigation();
    
  return (
    <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
        <Text style={{fontSize:18,textAlign:'center',marginTop:80,fontWeight:'bold'}}>LOGO HERE</Text>
     <Image source={images.rafiki} style={{height:135,width:155,marginTop:150, alignSelf:'center'}}/>
     <Text style={{alignSelf:'center',fontSize:20,marginTop:20,color:'#008081'}}>OTP Verification</Text>
     <Text style={{justifyContent:'center',fontSize:14,textAlign:'center',margin:20}} >We will send you a one-time password to this mobile number.</Text>
     <View style={styles.inputC}>
       
        <TextInput
          style={styles.input}
          placeholder="example@email.com"
          placeholderTextColor={'#ccc'}
          keyboardType="email"
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

export default Email

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
        fontSize:16,
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
        marginTop:60,
      },
      buttonText:{
        color: '#fff',
        fontSize: 14,
      },
})