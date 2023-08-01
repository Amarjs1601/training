import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import ImgComponent from '../components/imgcomponent/ImgComponent'
import ImageComponenet from '../components/ImageComponenet'
import Unit from '../components/unitcomponent/Unit'
import { postData } from '../services/ServerServices'

const Cart = (props) => {

  const [products,setProducts] = useState([])
  const setInitialData = async () => {
   
    var res = await postData('userinterface/fetch_products_by_category',{categoryname:'Dawat Rice'})
      setProducts(res.data)
  
  };

  useEffect(function () {
    setInitialData();
  }, []);

  return (
    <View>
      {/* <ImgComponent /> */}
      <ImageComponenet products={products}/>
      <Unit products={products} />
      
    </View>
  )
}

export default Cart