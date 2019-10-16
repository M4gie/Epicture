import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
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
          return {
            thumbnail: {
              uri: fav.images[0].link,
            },
            id: fav.id,
          };
        });
        this.setState({favorites: pictures});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log('RENDER', this.state.favorites);
    return (
      <LayoutContainer title={'Favoris'} font={''} fontSize={20}>
        <View style={styles.main_container}>
          <View style={styles.pictures}>
            <FlatList
              numColumns={3}
              data={this.state.favorites}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => this.renderItem(item)}
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
