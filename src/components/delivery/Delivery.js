import { StyleSheet, Text, View } from 'react-native'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './DeliveryCss'

const Delivery = () => {
  return (
    <>
      <View style={styles.icon}>

        <View style={styles.icon1}>
          <MCI
            name="timer-outline"
            size={30}
            style={{ color: "#000" }}
          />

        </View>
        <View style={styles.deliveryview}>
          <Text style={styles.delivery} >Delivery in 11 minutes</Text>
          <Text>3 items</Text>
        </View>
      </View>
    </>
  )
}

export default Delivery

