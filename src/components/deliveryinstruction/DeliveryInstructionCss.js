import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    height: 120,
    borderRadius: 10,
  },
  boxtext1: {
    flexDirection: 'row',
  },

  firstboxrow: {
    border: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 0.1,

    marginHorizontal: 8,
  },
  boxtext: {
    fontSize: 18,
    width: 127,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstrow: {
    flexDirection: 'row',

    height: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
});
export default styles;
