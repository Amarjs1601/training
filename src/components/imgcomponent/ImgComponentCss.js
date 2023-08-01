import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen');
const height = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    width: width,
    // height: height * 0.5,
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  textname: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default styles;
