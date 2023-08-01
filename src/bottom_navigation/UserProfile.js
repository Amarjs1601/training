import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import EN from 'react-native-vector-icons/Entypo'
import FI from 'react-native-vector-icons/FontAwesome5'
import MI from 'react-native-vector-icons/MaterialIcons'

const UserProfile = () => {
  return (
    <View style={{backgroundColor:'#ffcccc',height:'100%'}}>
    <View style={styles.heading}>
      <Text style={styles.textHeading}>UserProfile</Text>
    </View>

    <View style={styles.securityContainer}>
    <EN name="user" size={30} />
      <View>
        <TouchableOpacity>
          <Text style={{marginRight:220}}>Amardeep Sen</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.securityContainer}>
      <MI name="email" size={20} />
      <TouchableOpacity>
        <Text  style={{marginRight:140}}>amardeepsen99@gmail.com</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.securityContainer}>
    <EN name="mobile" size={25} />
    <View>
      <TouchableOpacity>
        <Text style={{marginRight:240}}>8982421787</Text>
      </TouchableOpacity>
    </View>
    </View>
    <View style={styles.securityContainer}>
    <EN name="address" size={25} />
    <View>
      <TouchableOpacity>
        <Text style={{marginRight:200}}>Pinto Park Gwalior</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>

  )
}

export default UserProfile

const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:10
  },
  textHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  securityContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:10,
    width: '95%',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
    marginLeft: 10,
    backgroundColor: '#bdc3c7',
    flexDirection:'row',
    height:80,
    paddingLeft:10
    
  },
   });
