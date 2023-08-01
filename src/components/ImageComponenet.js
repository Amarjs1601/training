import {View, Text, TouchableOpacity, Image,ScrollView} from 'react-native';
import React, {useState} from 'react';
import {ServerURL} from '../services/ServerServices';
import AddCart from './AddCart';
import Unit from './unitcomponent/Unit';


const ImageComponenet = (props) => {
  console.log("props",props);
  const [image, setImage] = useState('');
  // const productImage = [
  //   {
  //     productid: 1,
  //     productimage: 'Ashirvad.webp',
  //     productname: 'Ashirvad',
  //   },
  //   {
  //     productid: 2,
  //     productimage: 'fortune.png',
  //     productname: 'fortune',
  //   },
  //   {
  //     productid: 3,
  //     productimage: 'kissan.png',
  //     productname: 'kissan',
  //   },
  // ];

  const ImageView = () => {
    return props.images.map(item => {
      return (<TouchableOpacity
            onPress={() => setImage(item)}
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderColor: '#8e8e8e',
              borderWidth: 1,
              borderRadius: 6,
              padding: 5,
              marginHorizontal:5
            }}>
            <Image
              // source={{uri: `${ServerURL}/images/${item.productimage}`}}
              source={{uri: `${ServerURL}/images/${item}`}}
              style={{width: 50, height: 50}}
              resizeMode='contain'
            />
          </TouchableOpacity>
      );
    });
  };
  return(
    <View>
    <ScrollView>
  
  {image==""?
    
      <Image
        source={{uri: `${ServerURL}/images/${'kissan.png'}`}}
        style={{width: 270, height:350,alignSelf:'center'}}
      />:
      <Image
        source={{uri: `${ServerURL}/images/${image}`}}
        style={{width: 270, height:350,alignSelf:'center'}}
      />}

  
  <View style={{flexDirection: 'row', alignSelf: 'center',marginTop:10}}>
      {ImageView()}
    </View>
    


  <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: '2%',
          backgroundColor: '#fff',
          borderColor:'#8e8e8e',
        //   borderRadius:15,
        //   borderWidth:0.5,
          padding: 5,

        }}>
        
      </View>
      {image==''?
      <View style={{justifyContent: 'flex-start', marginHorizontal: '5%'}}>
        <Text style={{fontSize: 22, fontFamily: 'Poppin',fontWeight:'bold',color:'#000'}}>{'kissan.png'}</Text>
      </View>:
      <View style={{justifyContent: 'flex-start', marginHorizontal: '5%'}}>
        <Text style={{fontSize: 22, fontFamily: 'Poppin',fontWeight:'bold',color:'#000'}}>{image.productname}</Text>
      </View>  }

      {/* <Unit /> */}
  </ScrollView>
    
  
  </View>
  )
  
};

export default ImageComponenet;