import {StyleSheet} from 'react-native';

let stylesheet;

export default (stylesheet = StyleSheet.create({
  shadow_box: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  grey: {
    color: 'grey',
  },
  white: {
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
}));
