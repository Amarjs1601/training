import { View, Text,Modal, StyleSheet, TextInput, TouchableOpacity, } from 'react-native'
import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import Colors from '../../assets/Colors'

const Otp = () => {
    const uref1 = useRef()
    const uref2=  useRef()
    const uref3 = useRef()
    const uref4 = useRef()

    const [otp1,setOtp1] = useState('')
    const [otp2,setOtp2] = useState('')
    const [otp3,setOtp3] = useState('')
    const [otp4,setOtp4] =  useState('')
    const [visible,setModalVisible] =useState(true)

  return (
    <>
    <Modal visible={visible} style animationType='slide' transparent={true} >
        <View style={styles.container}>
          <View><Text style={styles.otptext}>Enter Otp</Text></View>  
    

        <View style={styles.textContainer}>
            <TextInput ref={uref1}
            keyboardType='numeric'
            maxLength={1}
            onChangeText={txt=>{
                setOtp1(txt);
                if(txt.length >=1){
                    uref2.current.focus()
                }else if(txt.length<1){
                    uref1.current.focus()
                }
            }}
            style={styles.textInput} />
            <TextInput ref={uref2}
            keyboardType='numeric'
            maxLength={1}
            onChangeText={txt =>{
                setOtp2(txt);
                if(txt != ""){
                    uref3.current.focus()
                }
            }}
             style={styles.textInput} />
            <TextInput 
            ref={uref3}
            keyboardType='numeric'
            maxLength={1}
            onChangeText={txt =>{
                setOtp3(txt)
                if(txt != ""){
                    uref4.current.focus()
                }
            }}
            style={styles.textInput} />
            <TextInput 
            ref={uref4}
            maxLength={1}
            keyboardType='numeric'
            onChangeText={txt =>{
                setOtp4(txt)
                // if(txt != ""){
                //     uref4.current.focus()
                // }
                
            }}
            style={styles.textInput} />

        </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity>
           <Button bgColor={Colors.black} width={150} foreColor={Colors.white}title={"Verify Otp"} style={styles.btn} onPress={(
            visible)=>{
                setModalVisible(!visible)}} />
        </TouchableOpacity>
        </View>
        </View>
    </Modal>
    </>
  )
}

export default Otp

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: '#000',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        height: 200,
        borderRadius: 10,
        marginVertical: 70,
        
       
    },
    otptext:{
        fontSize:18,
        fontWeight:'700',
        color:'#000',
        alignSelf:'center',
        
    },
    textInput:{
        borderWidth:1,
        borderColor:'#000',
        backgroundColor:'#fff',
        width:'15%',
        marginLeft:10,
        borderRadius:10,
        marginVertical:10,
        textAlign:'center'
    
    },
    textContainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:20,
        
        
    },
    btnContainer:{
        alignSelf:'center',
        marginVertical:30
    },
    btn:{
        alignSelf:'center'
    }
})