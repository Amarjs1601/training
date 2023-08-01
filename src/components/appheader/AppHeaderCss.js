import {Dimensions, StyleSheet} from 'react-native';
// const width = Dimensions.get('screen')
// const height = Dimensions.get('screen')

const styles = StyleSheet.create({
  menu: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    width: "100%",
    // height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});

export default styles;
