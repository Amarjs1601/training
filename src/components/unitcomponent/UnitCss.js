import {Dimensions, StyleSheet} from 'react-native';
const {width,height} = Dimensions.get('screen')
const styles = StyleSheet.create({
  unitcss: {
    width: width * 0.3,
    height: height * 0.1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  pricecss: {
    position: 'absolute',
    top: -5,
    left: '20%',
    width: 80,
    height: 25,
    backgroundColor: '#6c5ce7',
  },
  price: {
    textAlign: 'center',
    color: '#fff',
  },
  weightcss: {
    marginTop: 18,
  },
  weight: {
    color: '#000',
  },
  offercss: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  offer: {
    fontWeight: 'bold',
    color: '#000',
  },
  itemprice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#000',
    marginLeft: 5,
  },
});
export default styles;
