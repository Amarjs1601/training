import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container: {
        width: "95%",
       paddingVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#fff',
        border: 1,
        backgroundColor: '#fff',
    },
    Content: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 4,
        marginVertical:8,
        color:'#000'
    },
    price: {
        textDecorationLine: 'line-through',
       color:'#000',
       
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginRight:250
    },
})

export default styles