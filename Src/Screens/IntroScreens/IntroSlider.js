import React from 'react';
import images from '../Images';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const IntroSlider = ({ onDone }) => {
  const navigation = useNavigation();

  const slides = [
    {
      key: 'one',
      title: 'LOGO HERE',
      text: 'Save your money conviniently',
      text2:'Get 5% cash back for each transaction and spend it easily.',
      image: images.money,
      backgroundColor: '#fff',
    },
    {
      key: 'two',
      title: 'LOGO HERE',
      text: 'Save your money conviniently',
      image: images.chart,
      backgroundColor: '#fff',
      text2:'Get 5% cash back for each transaction and spend it easily.',
    },
    {
      key: 'three',
      title: 'LOGO HERE',
      text: 'Save your money conviniently',
      text2:'Get 5% cash back for each transaction and spend it easily.',
      image: images.step,
      backgroundColor: '#fff',
    }
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Animatable.Text animation="fadeInDown" delay={500} style={styles.title}>
        {item.title}
      </Animatable.Text>
      <Animatable.Image 
        animation="fadeInUp" 
        delay={500} 
        source={item.image} 
        style={styles.image} 
      />
      <Animatable.Text animation="fadeInUp" delay={500} style={styles.text}>
        {item.text}
      </Animatable.Text>
      <Animatable.Text animation="fadeInUp" delay={500} style={styles.text2}>
        {item.text2}
      </Animatable.Text>
    </View>
  );

  const renderSkipButton = () => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={styles.buttonText}>Next</Text>
      <Icon name="arrow-forward" size={22} color="white" style={styles.icon} />
    </TouchableOpacity>
  );

  const renderDoneButton = () => (
    <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('LoginScreen')}>
      <Text style={[styles.buttonText]}>Get Started</Text>
      <Icon name="arrow-forward" size={22} color="white" style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <AppIntroSlider 
      renderItem={renderItem} 
      data={slides} 
      renderSkipButton={renderSkipButton}
      renderDoneButton={renderDoneButton}
      showSkipButton
      SlidingDotIndicator={styles.activeDot}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'space-around',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  text2:{
    fontSize: 16,
    color:'#000',
    textAlign: 'center',
    marginBottom:10,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -200,
    marginBottom:50,
  },
  text: {
    fontSize: 20,
    color:'#125228',
    textAlign: 'center',
    margin:20,
    paddingHorizontal: 20,
  },
  image: {
    width: 280,
    height: 266,
    marginBottom: 20,
    borderRadius: 30,
  },
  button: {
    padding: 10,
    backgroundColor:'#008081',
    borderRadius:10,
    height:45,
    alignItems:'stretch',
    flexDirection:'row'
 
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    marginLeft:5,
    
    // backgroundColor:'green',
  },
  doneButtonText: {
    fontWeight: 'bold',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    Color: '#000',
    marginHorizontal: 8,
    marginLeft: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#000',
  
  },
});

export default IntroSlider;
