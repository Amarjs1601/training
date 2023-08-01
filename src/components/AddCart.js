import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import AN from "react-native-vector-icons/AntDesign"

const AddCart = () => {
  return (
    <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.context}>
        <View style={{flexDirection:'row'}}>
        <Icon style={{borderWidth:1,borderColor:'#fff',alignSelf:'center',backgroundColor:'#fff',borderRadius:5}} name="shoppingcart" size={24} />
        <View>
          <Text style={{color:'#fff',marginLeft:4}}>1 item</Text>
          <View style={{flexDirection:'row',}}>
          <Text style={{color:'#fff',marginLeft:5}}>&#8377;135</Text>
          <Text style={{color:'#ecf0f1',marginLeft:5,textDecorationLine:'line-through'}}>&#8377;150</Text>
          </View>
        </View>
        </View>
        <View>
         <View style={{flexDirection:'row'}}>
        <Text style={{color:'#fff',width:65}}>View Cart</Text>
        
        <AN name="right" size={18} style={{color:'#fff'}} />
      
        </View>
         </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  container: {
    width: 370,
    // height: 90,
    backgroundColor: 'green',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'green',
  },
  context:{
    flexDirection:'row',
    width:350,
    height:90,
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center'
  }
});
