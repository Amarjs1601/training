import {View, Text, Dimensions, TextInput} from 'react-native';
import CircleComponent from '../components/CircleComponent';
import SingleProductComponent from '../components/SingleProductComponent';
import BottomNavigation from '../bottom_navigation/BottomNavigation';
// import TextBox from '../components/TextBox';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen1 from '../bottom_navigation/Privacy';
const {width, height} = Dimensions.get('window');
import Screen2 from '../bottom_navigation/Order';
import Privacy from '../bottom_navigation/Privacy';
import Order from '../bottom_navigation/Order';
import UserProfile from '../bottom_navigation/UserProfile';
import ImgComponent from '../components/imgcomponent/ImgComponent';
import MultipleProductsComponent from '../components/MultipleProductsComponent';
import AddCart from '../components/AddCart';
import {getData, postData} from '../services/ServerServices';
import {useEffect, useState} from 'react';
import MobileDialog from '../components/dialog/MobileDialog';
import UserDialog from '../components/userdialog/UserDialog';
import Otp from '../otpcomponent/Otp';
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products,setProducts] = useState([])

  const setInitialData = async () => {
    var result = await getData('userinterface/fetch_all_category');
    // console.log("12345",result)
       setCategories(result.data);
    var res = await postData('userinterface/fetch_products_by_category',{categoryname:'Dawat Rice'})
      setProducts(res.data)
      console.log("RES>>>>>>",res.data);
      // console.log("xxxxxx",res)
  };

  useEffect(function () {
    setInitialData();
  }, []);

  
  return (
    <View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#000',
          padding: 10,
          marginVertical: 10,
          width: '95%',
          alignSelf: 'center',
          borderRadius: 8,
          height: 70,
        }}>
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <Icons name="magnify" size={30} style={{marginVertical: 10}} />
        </View>
        <TextInput placeholder="Search Products Here..." style={{marginVertical: -50,alignSelf:'center',color:'#000'}}/>
      </View>
      <CircleComponent
        categoryData={categories}
        heading={'Popular Categories'}
      />
      <View>
        <MultipleProductsComponent products={products} />
      </View>
      {/* <AddCart /> */}
      {/* <MobileDialog /> */}
      {/* <UserDialog /> */}
      {/* <Otp /> */}
    </View>
  );
}
