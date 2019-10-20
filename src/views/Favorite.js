import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import AccountServices from '../services/account';
import SquareImage from '../components/image/SquareImage';

class FavoriteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }

  renderItem(item) {
    return <SquareImage item={item} />;
  }

  componentDidMount(): void {
    AccountServices.favorites(0)
      .then(response => {
        let pictures = response.data.map(fav => {
          if (
            fav.images &&
            (fav.images[0].type === 'image/jpeg' ||
              fav.images[0].type === 'image/png') &&
            fav.images[0].link !== ''
          ) {
            return {
              thumbnail: {
                uri: fav.images[0].link,
              },
              id: fav.id,
            };
          }
        });
        this.setState({ favorites: pictures });
      })
      .catch(error => {
        console.debug(error);
      });
  }

  render() {
    return (
      <LayoutContainer title={'Favoris'} font={''} fontSize={20}>
        <View style={styles.main_container}>
          <View style={styles.pictures}>
            {this.state.favorites ? (
              <FlatList
                numColumns={3}
                data={this.state.favorites}
                keyExtractor={item => item.id.toString()}
                renderItem={( item ) => this.renderItem(item)}
              />
            ) : (
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Pas de favoris.
              </Text>
            )}
          </View>
        </View>
      </LayoutContainer>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'hsl(218,15%,15%)'
  },
  pictures: {
    marginVertical: 1,
  },
});

export default FavoriteContainer;
