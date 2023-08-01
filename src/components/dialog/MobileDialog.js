import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import TextBox from '../TextBox';

import {TextInput} from 'react-native';
import Button from '../Button';
import Colors from '../../../assets/Colors';

const MobileDialog = () => {
  return (
    <View>
      <View style={styles.dialog}>
        <View style={styles.heading}>
          <Text style={styles.headingtext}>Enter Mobile Number</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: '90%',
            borderWidth: 1,
            borderColor: '#000',
            // borderRadius: 20,
            marginTop: 10,
          }}>
            
            <TextInput placeholder="+91"   />
        </View>
        <View style={styles.button}>
        <Button  bgColor={Colors.black} foreColor={Colors.white} title={"getotp"} width={200} height={50} />
        </View>
      </View>
    </View>
  );
};

export default MobileDialog;

const styles = StyleSheet.create({
  dialog: {
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    height: 200,
    borderRadius: 10,
    marginVertical: 20,

  },
  heading: {},
  headingtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'center',
    marginTop: 10,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    padding:20
  }
});
