import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from './Header'
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
        <View style={styles.container}>
          <HomeHeader
            title="Welcome, User!"
            onBackPress={() => navigation.goBack()} // Back button action
            rightIcon="notifications-outline" // Custom icon
            onRightPress={() => alert('Notifications pressed')} 
            balance="3,000.00" // Wallet balance
            walletId="23401567" // Wallet ID
            headerHeight={100} // Custom height for HomeScreen
            headerWidth="100%" 
          />
          <View style={{backgroundColor:'#0B806F',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
           <View style={styles.balanceCard}>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceText}>Current balance</Text>
          <Text style={styles.walletText}>Wallet ID: 23401567</Text>
        </View>
        <View style={styles.amountRow}>
          <Text style={styles.amount}>₦3,000.00</Text>
          <Icon name="eye-off-outline" size={24} color="#000" />
        </View>
        </View>

      </View>
      
          <Text style={styles.paymentText}>Payment</Text>
        </View>
      );
    };

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  balanceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight:20,
    marginBottom: 20,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  walletText: {
    fontSize: 14,
    color: '#666',
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  paymentText: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
