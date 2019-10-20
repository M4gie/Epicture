// DownVote.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import stylesheet from '../../styles/styles';

const DownVote = props => {
  const { imageHash, vote, downs, iconSize, handleVote } = props;

  return (
    <TouchableOpacity
      style={{ marginHorizontal: 5 }}
      onPress={() => handleVote('down', imageHash)}
    >
      <Text style={stylesheet.white}>
        <Icon
          name={'arrow-down'}
          color={vote === 'down' ? 'red' : 'grey'}
          size={iconSize}
        />{' '}
        {downs}
      </Text>
    </TouchableOpacity>
  );
};

export default DownVote;
