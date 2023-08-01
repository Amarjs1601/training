import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    borderWidth: 0.1,
    borderColor: '#000',
    width: 80,
    // height:30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: 12,
    marginHorizontal: 2,
    flex: 1,
    paddingVertical: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  tip: {
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  btncss: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default styles;
