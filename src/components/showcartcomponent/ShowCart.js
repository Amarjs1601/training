import { View, Text, FlatList, Image, Dimensions, ScrollView } from 'react-native'
import { ServerURL } from '../../services/ServerServices'
import React from 'react'
import AddToCartBtn from '../addtocartbtn/AddToCartBtn';
import Colors from '../../../assets/Colors';
import styles from '../showcartcomponent/ShowCartCss'





const { width, height } = Dimensions.get('window');

const ShowPr = ({ item }) => {
    return <View style={ styles.container }>
        <View >
            <Image   source={{ uri: `${ServerURL}/images/${item.image}` }} resizeMode='contain' style={ styles.image } />
        </View>

        <View style={ styles.textname }>
            <Text style={styles.textname1}>{item.name}</Text>
            <Text style={styles.litre}>{item.litre}</Text>
            <Text style={styles.price}>&#8377;{item.price}</Text>
        </View>
    <View style={styles.addbtn}>
         <AddToCartBtn   />
    </View>
    </View>
}


const ShowCart = () => {

    const data = [{ showproductid: 1, image: "organic cow milk.png", name: 'Akshayakalpa', litre: '500ml', price: '33' },
    { showproductid: 2, image: "amul gold milk.png", name: 'Amul Gold Cream', litre: '500ml', price: '27' }]

    return (
        <View>
            <ScrollView showVerticalScrollIndicator={false}>
                {data.map((item, index) => {
                    return <ShowPr item={item} />
                })}
            </ScrollView>
        </View>
    )
}

export default ShowCart