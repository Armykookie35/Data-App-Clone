import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const HomeHeader = ({ 
  title, 
  onBackPress, 
  rightIcon, 
  onRightPress, 
  headerHeight = 100, 
  headerWidth = '100%' 
}) => {
  return (
    <View style={[styles.headerContainer, { height: headerHeight, width: headerWidth }]}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.welcomeText}>{title}</Text>
        <TouchableOpacity onPress={onRightPress}>
          <Icon name={rightIcon} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0B806F',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight:120
  },
});

export default HomeHeader;
