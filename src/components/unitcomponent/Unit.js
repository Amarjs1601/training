import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Button from '../Button'
import Colors from '../../../assets/Colors'
import styles from './UnitCss'
import { postData } from '../../services/ServerServices'
const { width, height } = Dimensions.get('screen')


const Unit = () => {

    // const unit = [
    //     {
    //         unitid: 1, weight: '5kg', offer: 215, price: 250
    //     },
    //     {
    //         unitid: 2, weight: '10kg', offer: 200, price: 300
    //     },
    //     {
    //         unitid: 3, weight: '20kg', offer: 150, price: 200
    //     },
    // ]

   
    const select = (props) => {
        return props.map((item) => {
            return (
                <View style={styles.unitcss}>
                    <View style={styles.pricecss}>

                        <Text style={styles.price} >{parseInt(((item.price - item.offer) / item.price) * 100)}%</Text>
                    </View>
                    <View style={styles.weightcss}>
                        <Text style={styles.weight}>{item.weight}</Text>
                    </View>
                    <View style={styles.offercss}>
                        <Text style={styles.offer}>&#8377;{item.offer}</Text>
                        <Text style={styles.itemprice}>&#8377;{item.price}</Text>
                    </View>
                </View>
            )
        })
    }

    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {select()}
            </View>
            <View style={{ marginVertical: 20, alignSelf: "center" }}>
                <Button title={"ADD"} bgColor={Colors.black} foreColor={Colors.white} width={width * 0.90} />
            </View>
        </View>
    )
}

export default Unit