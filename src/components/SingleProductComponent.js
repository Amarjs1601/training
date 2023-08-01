import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ServerURL} from '../services/ServerServices';
import Colors from '../../assets/Colors';
import Button from './Button';
import AddToCartBtn from './addtocartbtn/AddToCartBtn';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
export default function SingleProductComponent({data}) {
  const navigation=useNavigation()
  return (
    <View style={{margin: 10}}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          borderColor: '#a4b0be',
          borderWidth: 1,
          width: width * 0.4,
          height: height * 0.3,
          borderRadius: 10,
        }}
        onPress={()=>navigation.navigate('SelectedProduct',{productData:data})}
        >
        <Image
          style={{resizeMode: 'contain', width: 100, height: 100}}
          source={{uri: `${ServerURL}/images/${data.productimage}`}}
        />
        <Text style={{marginVertical: 5, fontWeight: 'bold'}}>
          {data.productname} {data.weight} {data.priocetype}
        </Text>
        <View style={{justifyContent: 'flex-start', width: width * 0.3}}>
          <Text
            style={{
              color: Colors.red,
              fontWeight: 'bold',
              textDecorationLine: 'line-through',
            }}>
            &#8377; {data.price}
          </Text>
          <Text style={{color: Colors.black, fontWeight: 'bold'}}>
            &#8377; {data.offerprice}
          </Text>
          <Text style={{color: Colors.darkGreen, fontWeight: 'bold'}}>
            Save &#8377; {data.price - data.offerprice}
          </Text>
          <View>
            <AddToCartBtn />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
