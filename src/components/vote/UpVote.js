// UpVote.js

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import stylesheet from '../../styles/styles';
import GalleryService from '../../services/gallery';

class UpVote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {imageHash, vote, iconSize, ups, handleVote} = this.props;

    return (
      <TouchableOpacity
        style={{marginHorizontal: 5}}
        onPress={() => handleVote('up', imageHash)}>
        <Text style={stylesheet.white}>
          <Icon
            name={'arrow-up'}
            color={vote ? 'green' : 'grey'}
            size={iconSize}
          />{' '}
          {ups}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});

export default UpVote;
