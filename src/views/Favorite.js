import React from 'react';
import {StyleSheet, View} from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import GridList from 'react-native-grid-list';
import SquareImage from '../components/image/SquareImage';

const items = [
  {
    thumbnail: {
      uri:
        'https://cdn.discordapp.com/attachments/160814261835268096/631870909354999837/unknown.png',
    },
  },
  {
    thumbnail: {
      uri:
        'https://cdn.discordapp.com/attachments/160814261835268096/631871255108124690/unknown.png',
    },
  },
  {
    thumbnail: {
      uri:
        'https://cdn.discordapp.com/attachments/160814261835268096/631871347957694476/unknown.png',
    },
  },
  {
    thumbnail: {
      uri:
        'https://cdn.discordapp.com/attachments/160814261835268096/631871461799231499/unknown.png',
    },
  },
  {
    thumbnail: {
      uri:
        'https://cdn.discordapp.com/attachments/160814261835268096/631871518368071730/unknown.png',
    },
  },
  {
    thumbnail: {
      uri:
        'https://cdn.discordapp.com/attachments/160814261835268096/631871609627607047/unknown.png',
    },
  },
  {
    thumbnail: {
      uri:
        'https://www.ucpa.com/media/fstore/ecom-ucpa/ecosystems/default/editorial/pageblanche/Hit-the-road/Hit-the-road_exploration.jpg',
    },
  },
];

class FavoriteContainer extends React.Component {
  renderItem = ({item, index}) => <SquareImage item={item} index={index} />;

  render() {
    return (
      <LayoutContainer title={'Favoris'} font={''} fontSize={20}>
        <View style={styles.main_container}>
          <View style={styles.pictures}>
            <GridList
              showSeparator
              separatorBorderColor={'hsl(220,13%,14%)'}
              separatorBorderWidth={1}
              data={items}
              numColumns={3}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      </LayoutContainer>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'hsl(218,15%,15%)',
  },
  pictures: {
    marginVertical: 1,
  },
});

export default FavoriteContainer;
