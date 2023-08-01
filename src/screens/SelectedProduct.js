import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageComponenet from '../components/ImageComponenet'
import Unit from '../components/unitcomponent/Unit'
import { postData } from '../services/ServerServices'


const SelectedProduct = (props) => {
 // console.log("PROPS DATA IN SELECTED PRODUCT",props.route.params.productData);

//  const fetchAllProduct=async()=>{
//   var result = await postData('userinterface/fetch_all_productlist_by_product',{productid:product.productid})
//   console.log("PRODUCT LIST",result.data)
// }
// useEffect(function(){
//   fetchAllProduct()
// },[])

  
//  const[product,setProduct]  = useState(props.route.params.productData)
  var images=product.images.split(',')
  let tempImg=images.splice(0,images.length-1)
  // let arrayOfProductData=Object.entries(props.route.params.productData)
  // console.log("arrayofproductdata",arrayOfProductData);


  return (
    <View style={{flexDirection:"column",}}>
    <ImageComponenet images={tempImg} />
    <Unit product={product} setProduct={setProduct} />
    </View>
  )
}

export default SelectedProduct

const styles = StyleSheet.create({})