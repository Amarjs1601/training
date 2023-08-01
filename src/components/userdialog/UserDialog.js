import { StyleSheet, Text, View,TextInput,ScrollView,Modal } from 'react-native'
import React from 'react'
import Button from '../Button';
import Colors from '../../../assets/Colors';


export default function UserDialog() {
    const [modalOpen, setModalOpen] = React.useState(true)
  return (
    <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalOpen}
    //   onRequestClose={() => {
    //     Alert.alert('Modal has been closed.');
    //     setModalVisible(!modalVisible);
    //   }}
      >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <ScrollView nestedScrollEnabled={true} >
        <View style={{borderWidth:1,borderColor:'#000'}}>

         <Text style={styles.topheading}>Enter Your Address</Text>

         <View>
            <Text style={styles.heading}>Mobile Number</Text>
            <TextInput style={styles.textbox1} placeholder="enter mob number"   />
         </View>
         <View>
            <Text style={styles.heading}>Email Id</Text>
            <TextInput style={styles.textbox1} placeholder="email address"   />
         </View>
         <View>
            <Text style={styles.heading}>Name</Text>
            <TextInput style={styles.textbox1} placeholder="enter your name"   />
         </View>
         <View>
            <Text style={styles.heading}>Mobile Number</Text>
            <TextInput style={styles.textbox1} placeholder="+91"   />
         </View>
         <View>
            <Text style={styles.heading}>Enter your address 1</Text>
            <TextInput style={styles.textbox1} placeholder=" enter your address 1"   />
         </View>
         <View>
            <Text style={styles.heading}>Enter your address 2</Text>
            <TextInput style={styles.textbox1} placeholder=" enter your address 2"   />
         </View>
         <View>
            <Text style={styles.heading}>City</Text>
            <TextInput style={styles.textbox1} placeholder="enter city"   />
         </View>
         <View>
            <Text style={styles.heading}>State</Text>
            <TextInput style={styles.textbox1} placeholder="enter state"   />
         </View>
         <View>
            <Text style={styles.heading}>Pincode</Text>
            <TextInput style={styles.textbox1} placeholder="pincode"   />
         </View>
         <View style={styles.button}>
        <Button  bgColor={Colors.black} foreColor={Colors.white} title={"submit"} width={200} height={50} />
        </View>
      
        </View>
        </ScrollView>
        </View>
      </View>
    </Modal>
    {/* <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}> */}
      {/* <Text style={styles.textStyle}>Show Modal</Text>
    </Pressable> */}
  </View>
 
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        overflow:"hidden",
        height:500,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    topheading:{
        padding:10,
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    heading:{
        fontSize:15,
        fontWeight:'#000',
        padding:5,
        paddingLeft:15
        
    },
    textbox1:{
        borderWidth:1,
        borderColor:'#000',
        width:'80%',
        alignSelf:'center',
        borderRadius:5
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        padding:20
      }
})