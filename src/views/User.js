import React from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import CircleImage from '../components/image/CircleImage';
import stylesheet from '../styles/styles';
import token from '../shared/lib/Token';
import SquareImage from '../components/image/SquareImage';
import AccountServices from '../services/account';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      avatar: '',
      username: '',
      bio: '',
    };
  }

  renderItem(item) {
    return <SquareImage item={item} />;
  }

  signout = async () => {
    await token.clearToken('BearerToken');
    await token.clearToken('username');
    this.props.navigation.navigate('Auth');
  };

  componentDidMount(): void {
    AccountServices.images(0)
      .then(response => {
        console.log(response);
        let picturesArr = response.data.map(picture => {
          return {
            thumbnail: {
              uri: picture.link,
            },
            id: picture.id,
          };
        });
        this.setState({pictures: picturesArr});
      })
      .catch(error => {
        console.log(error);
      });

    AccountServices.avatar()
      .then(response => {
        this.setState({avatar: response.data.avatar});
      })
      .catch(error => {
        console.log(error);
      });

    AccountServices.base()
      .then(async response => {
        this.setState({bio: response.data.bio});
        this.setState({username: await token.getToken('username')});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <LayoutContainer title={'Profil'} font={''} fontSize={20}>
        <View style={styles.main_container}>
          <Button title="Déconnexion" onPress={this.signout} />
          <View style={[styles.banner, stylesheet.shadow_box]}>
            <View style={styles.banner_content}>
              <View style={styles.picture}>
                <CircleImage pic={this.state.avatar} />
              </View>
              <View style={styles.infos}>
                <Text
                  style={[{fontSize: 30}, stylesheet.white, stylesheet.bold]}>
                  {this.state.username}
                </Text>
                <Text
                  numberOfLines={3}
                  style={[{fontSize: 14}, stylesheet.grey]}>
                  {this.state.bio}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.pictures}>
            <FlatList
              numColumns={3}
              data={this.state.pictures}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={item => item.id.toString()}
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
    backgroundColor: 'hsl(218,15%,15%)',
  },
  pictures: {
    marginVertical: 1,
  },
});

export default UserContainer;
