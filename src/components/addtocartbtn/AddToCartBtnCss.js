import {StyleSheet} from 'react-native';
import Colors from '../../../assets/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  minus: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  minustext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  getvaluecss: {
    fontSize: 22,
    fontWeight: 'bold',
    borderWidth: 1,
    width: 25,
    borderRadius: 0,
    height: 29,
    color: Colors.black,
    textAlign: 'center',
    borderColor: Colors.darkGreen,
  },
  plus: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  plustext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
