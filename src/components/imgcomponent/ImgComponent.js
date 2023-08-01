import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-banner-carousel';
import {ServerURL} from '../../services/ServerServices';
import styles from './ImgComponentCss';
const {width, height} = Dimensions.get('screen');

const ShowPrImg = ({item}) => {
   console.log("ffff",item);
  return (
    <View>
      <View>
        <Image
          source={{uri: `${ServerURL}/images/${item.image}`}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <View style={styles.name}>
        <Text style={styles.textname}>{item.name}</Text>
      </View>
    </View>
  );
};

const ImgComponent = ({title}) => {
  const productImg = [
    {
      categoryid: 1,
      image: 'fortuneoil.webp',
      name: 'Fortune Chakki Fresh (100% Atta, 0% Maida) Atta',
    },
    {
      categoryid: 2,
      image: 'lays.png',
      name: 'Fortune Chakki Fresh (100% Atta, 0% Maida) Atta',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Carousel autoplay autoplayTimeout={2000} loop index={0} pageSize={width}>
        {productImg.map((item, index) => {
          return <ShowPrImg item={item} />;
          
          
        })}
      </Carousel>
    </View>
  );
};

export default ImgComponent;
