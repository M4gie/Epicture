import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import stylesheet from '../../styles/styles'

const LayoutContainer = props => {
  const {title} = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={stylesheet.white}>{title}</Text>
      </View>
      {props.children}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'hsl(218,7%,21%)',
  },
});

export default LayoutContainer;
