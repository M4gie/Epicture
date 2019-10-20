import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AlbumServices from '../../services/album';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: this.props.favorite,
    };
  }

  handleFavorite = imageHash => {
    AlbumServices.favorite(imageHash)
      .then(response => {
        this.setState({favorite: !this.state.favorite});
      })
      .catch(error => {
        console.debug(error);
      });
  };

  render() {
    const {imageHash, iconSize} = this.props;
    return (
      <TouchableOpacity
        style={{marginHorizontal: 5}}
        onPress={() => this.handleFavorite(imageHash)}>
        <Icon
          name={'heart'}
          color={this.state.favorite ? 'red' : 'grey'}
          size={iconSize}
        />
      </TouchableOpacity>
    );
  }
}

export default Favorite;
