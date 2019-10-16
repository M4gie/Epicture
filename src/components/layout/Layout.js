import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import stylesheet from '../../styles/styles';

const LayoutContainer = props => {
  const {title, font, fontSize} = props;
  return (
    <SafeAreaView>
      <View style={[styles.container, stylesheet.shadow_box]}>
        <Text
          style={[stylesheet.white, {fontFamily: font, fontSize: fontSize}]}>
          {title}
        </Text>
      </View>
      {props.children}
    </SafeAreaView>
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
