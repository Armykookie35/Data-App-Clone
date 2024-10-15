import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Continue = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontSize:18,textAlign:'center',marginTop:80,fontWeight:'bold'}}>LOGO HERE</Text>
<Text  style={{fontSize:16,textAlign:'center',marginTop:80,margin:20,marginBottom:400}}>Your account has been successfully created! Click the button below to complete registration. </Text>
      <TouchableOpacity style={styles.button}
           onPress={() => navigation.navigate('Pin')}
           >
        <Text style={styles.buttonText}>
          Continue
        </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Continue

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