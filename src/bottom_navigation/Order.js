import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FI from 'react-native-vector-icons/FontAwesome5';
import MI from 'react-native-vector-icons/MaterialIcons';

const Order = () => {
  return (
    <View style={{backgroundColor:'#ffcccc',height:'100%'}}>
      <View style={styles.heading}>
        <Text style={styles.textHeading}>Order Details</Text>
      </View>

      <View style={styles.securityContainer}>
      <MI name="location-on" size={30} />
        <View>
          <TouchableOpacity>
            <Text style={styles.security}>Track Your Order</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.securityContainer}>
        <MI name="call" size={20} />
        <TouchableOpacity>
          <Text  style={{marginRight:200}}>Call Delivery Partner</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.securityContainer}>
      <MI name="report" size={25} />
      <View>
        <TouchableOpacity>
          <Text style={styles.security}>Report a Problem</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10,
  },
  textHeading: {
   
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  securityContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:5,
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    marginLeft: 10,
    backgroundColor: '#bdc3c7',
    flexDirection:'row',
    height:80,
    paddingLeft:10
  },
   security:{
   marginRight:220
   } 

});
