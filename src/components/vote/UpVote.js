// UpVote.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import stylesheet from '../../styles/styles';

const UpVote = props => {
  const { imageHash, vote, iconSize, ups, handleVote } = props;

  return (
    <TouchableOpacity
      style={{ marginHorizontal: 5 }}
      onPress={() => handleVote('up', imageHash)}
    >
      <Text style={stylesheet.white}>
        <Icon
          name={'arrow-up'}
          color={vote === 'up' ? 'green' : 'grey'}
          size={iconSize}
        />{' '}
        {ups}
      </Text>
    </TouchableOpacity>
  );
};

export default UpVote;
