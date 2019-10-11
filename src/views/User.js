import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import CircleImage from '../components/image/CircleImage';
import GridList from 'react-native-grid-list';
import stylesheet from '../styles/styles';

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

class UserContainer extends React.Component {
  renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity
        onPress={() => alert('image ' + (index + 1) + ' touched')}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={item.thumbnail}
        />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <LayoutContainer title={'Profil'}>
        <View style={styles.main_container}>
          <View style={[styles.banner, stylesheet.shadow_box]}>
            <View style={styles.banner_content}>
              <View style={styles.picture}>
                <CircleImage
                  pic={
                    'https://pbs.twimg.com/profile_images/606263942688735232/CUv5tizA_400x400.jpg'
                  }
                />
              </View>
              <View style={styles.infos}>
                <Text
                  style={[{fontSize: 30}, stylesheet.white, stylesheet.bold]}>
                  Hit The Road
                </Text>
                <Text
                  numberOfLines={3}
                  style={[{fontSize: 14}, stylesheet.grey]}>
                  NEW FEED ! FOLLOW: @clement.htr & @paulrdb ! YOUTUBE 325K
                </Text>
              </View>
            </View>
          </View>
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
  banner_content: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  picture: {
    flex: 2,
    padding: 10,
  },
  infos: {
    flex: 4,
    padding: 10,
  },
  banner: {
    height: 140,
    backgroundColor: 'hsl(218,15%,15%)d',
  },
  pictures: {
    marginVertical: 1,
  },
});

export default UserContainer;
