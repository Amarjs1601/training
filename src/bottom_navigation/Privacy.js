import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FI from 'react-native-vector-icons/FontAwesome5';

const Privacy = () => {
  return (
    <View style={{backgroundColor:'#ffcccc',height:'100%'}}>
      <View style={styles.heading}>
        <Text style={styles.textHeading}>Privacy Policy</Text>
      </View>

      <View style={styles.securityContainer}>
      <MCI name="security" size={30} />
        <View>
          <TouchableOpacity>
            <Text style={styles.security}>Security</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.securityContainer}>
        <FI name="hands-helping" size={20} />
        <TouchableOpacity>
          <Text  style={{marginRight:275,fontSize:19}}>Help</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.securityContainer}>
      <FI name="help" size={25} />
      <View>
        <TouchableOpacity>
          <Text style={styles.security}>About Us</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10
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
    paddingLeft:10,
    
    
    
  },
   security:{
   marginRight:230,
   fontSize:19,
   width:90,
   
   } 

});
