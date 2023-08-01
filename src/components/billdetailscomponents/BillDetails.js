import react, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import Icons from "react-native-vector-icons/FontAwesome5"
import MIC from "react-native-vector-icons/MaterialIcons"
import styles from "./BillDetailsCss"

export default function BillDetails() {
    const [totals, setTotals] = useState('');
    const Category = [
        { id: 1, name: 'Lays salted chips', weight: '1 Kg', price: 40, offer: '30', image: 'lays.png' },
        { id: 2, name: 'Tide', weight: '1 kg', price: 200, offer: 180, image: 'tide.png' },
        { id: 3, name: 'Coca Cola', weight: '1 Litre', price: 60, offer: '50', image: 'cocacola.png' },
    ]
    

    const bills = () => {
//          var obj =  Category.reduce((initial,next)=> {
//             console.log(initial+next.price);
//             let temp=initial+next.price
//             return temp
//         },0)
//         // {o:200,p:500}
//         setTotals(obj)
//         // console.log("obj",obj);
// //   return obj
    }

    useEffect(() => {
        bills()
    }, [])
    console.log("bills" + JSON.stringify(bills()))

    return (
        <SafeAreaView style={styles.Container}>

            <Text style={styles.heading}>Bill Details</Text>

            <View style={styles.Content}>
                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                     <Icons style={{fontWeight:'bold',color:'#000'}}  name={"list-alt"} size={30}  />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>Sub Total</Text>
                </View>
                <View>
                    <Text style={styles.price}>&#8377;{totals}</Text>
                    <View>
                        <Text >&#8377;260</Text>
                    </View>
                </View>
            </View>

            <View style={styles.Content}>
                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',}}>
                <MIC style={{fontWeight:'bold',color:'#000'}} name={"delivery-dining"} size={30}  />
                    <Text style={{marginLeft:10,fontWeight:'bold'}}>Delivery Charge</Text>
                </View>
                <View>
                    <Text>&#8377;15</Text>
                </View>
            </View>

            <View style={styles.Content}>
                <View>
                    <Text style={{fontWeight:'bold'}}>Grand Total</Text>
                </View>
                <View  >
                    <Text style={styles.price}>&#8377;{totals}</Text>
                    <View>
                        <Text >&#8377;275</Text>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    )
}
