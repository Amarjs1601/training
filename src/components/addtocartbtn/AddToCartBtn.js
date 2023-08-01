import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Button from '../Button'
import Colors from '../../../assets/Colors'
import styles from './AddToCartBtnCss'



const AddToCartBtn = () => {

    const [getVal,setVal]=useState(0)

    const handleMinus=()=>{
        if(getVal>0){
            setVal(prev=>prev-1)
        }
    }

    const handlePlus=()=>{
        if(getVal<5)
      setVal(prev=>prev+1)
    }

    return (
        <>
        {getVal==0 ? 
            <Button  onPress={()=>handlePlus()} title={'ADD'} foreColor={'#fff'}  bgColor={Colors.darkGreen} />  : 
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>handleMinus()} style={styles.minus} >
                <Text style={styles.minustext}>-</Text>
            </TouchableOpacity>
            <Text style={styles.getvaluecss} >
              {getVal}
            </Text>
            <TouchableOpacity onPress={()=>handlePlus()} style={styles.plus}>
                <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
        </View>}
        </>
    )
}

export default AddToCartBtn

