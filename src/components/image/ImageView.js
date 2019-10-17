// ImageView.js

import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import stylesheet from '../../styles/styles';
import CircleImage from './CircleImage';
import Favorite from '../vote/Favorite';
import UpDown from '../vote/UpDown';

class ImageView extends React.Component {
  render() {
    const image = this.props.image;

    return (
      <View style={styles.main_container}>
        <View style={styles.topview}>
          <View style={{width: 60, padding: 5}}>
            <CircleImage size={60} pic={image.profilepic} />
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              padding: 5,
            }}>
            <Text style={[stylesheet.bold, stylesheet.white]}>
              {image.title}
            </Text>
            <Text style={[{fontSize: 12}, stylesheet.grey]}>
              {image.username}
            </Text>
          </View>
        </View>

        <View style={styles.image}>
          <Image source={{uri: image.image}} style={{flex: 1}} />
        </View>

        <View style={styles.bottomview}>
          <View style={{flexDirection: 'row'}}>
            <UpDown
              imageHash={image.imageHash}
              ups={image.ups}
              down={image.downs}
              vote={image.vote}
            />
            <Favorite
              iconSize={20}
              favorite={image.favorite}
              imageHash={image.id}
            />
          </View>
        </View>
        <Text numberOfLines={2} style={[stylesheet.bold, stylesheet.white]}>
          {image.username}
          <Text style={{fontWeight: '200'}}> {image.description}</Text>
        </Text>
        <Text style={stylesheet.grey}>
          Voir les {image.comments} commentaires
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'hsl(218,7%,21%)',
    margin: 5,
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  topview: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
  },
  bottomview: {
    flex: 1,
    margin: 10,
  },
});

export default ImageView;
