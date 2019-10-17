// DownVote.js

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import stylesheet from '../../styles/styles';

class DownVote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {imageHash, vote, downs, iconSize, handleVote} = this.props;

    return (
      <TouchableOpacity
        style={{marginHorizontal: 5}}
        onPress={() => handleVote('down', imageHash)}>
        <Text style={stylesheet.white}>
          <Icon
            name={'arrow-down'}
            color={vote ? 'red' : 'grey'}
            size={iconSize}
          />{' '}
          {downs}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});

export default DownVote;
