import {View, Text, Dimensions, FlatList} from 'react-native';
import CircleComponent from '../components/CircleComponent';
import SingleProductComponent from '../components/SingleProductComponent';
import BottomNavigation from '../bottom_navigation/BottomNavigation';
import TextBox from '../components/TextBox';
import Screen1 from '../bottom_navigation/Privacy';
const {width, height} = Dimensions.get('window');
import Screen2 from '../bottom_navigation/Order';
import Privacy from '../bottom_navigation/Privacy';
import Order from '../bottom_navigation/Order';
import UserProfile from '../bottom_navigation/UserProfile';
import ImgComponent from '../components/imgcomponent/ImgComponent';
import AddCart from '../components/AddCart';
import Colors from '../../assets/Colors';
export default function MultipleProductsComponent({products}) {
  const Item = ({product}) => {
    return <SingleProductComponent data={product} />;
  };

  return (
    <View>
      <Text
        style={{
          marginLeft: 10,
          marginVertical: 10,
          fontWeight: 'bold',
          color: Colors.black,
        }}>
        Breads & Buttor
      </Text>

      <FlatList
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <Item product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
