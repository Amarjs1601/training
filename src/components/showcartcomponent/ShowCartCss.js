import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        flexDirection: "row", margin: 0, backgroundColor: "#fff", 
        padding: 0, borderRadius: 10,justifyContent:'space-evenly'
    },
    image:{
        width: 150, height:120,flex:1
    },
    textname:{
        paddingLeft: 20
    },
    textname1:{
        fontSize: 20, fontWeight: "bold", color: "#000"
    },
    litre:{
        fontSize: 15
    },
    price:{
        fontSize: 20, fontWeight: "bold", color: "#000" 
    },
    addbtn:{
        justifyContent:'center',marginLeft:'auto',
        width:'30%',padding:10
    }
})

export default styles