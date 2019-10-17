import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import LayoutContainer from '../components/layout/Layout';
import ImageView from '../components/image/ImageView';
import stylesheet from '../styles/styles';
import GalleryServices from "../services/gallery";
import AccountServices from "../services/account";

const images = [
  {
    id: 181808,
    image:
      'https://media.discordapp.net/attachments/630112847434874890/631947610525007902/image0.jpg?width=495&height=660',
    username: 'Pierre',
    profilepic:
      'https://images-na.ssl-images-amazon.com/images/I/71c-O3GaxLL._SY450_.jpg',
    place: 'chez awesmosh',
    likes: "2 241 J'aime",
    description: 'Je suis le petit chat miaou je suis moche',
    comments: 12,
    title: 'Je suis un chat oui oui oui miaou miaou regardez moi'
  },
  {
    id: 181811,
    image:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    username: 'chaudrop',
    profilepic:
      'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/12190981_834909716634762_5265565565079095339_n.jpg?_nc_cat=110&_nc_oc=AQkQZeT6r1lqnO3JtQ6UUWWc5S1jV-r3Qqp5XLJ7T0WGRzzu7ROlvSvlN5qn3anF_MA&_nc_ht=scontent-cdg2-1.xx&oh=415e5773b0cbfe977386e05c2525cc5e&oe=5E2C6E74',
    place: 'Salle de bain',
    likes: "193 J'aime",
    description: "Moi à New York c'était cool j'ai mangé des hambourgeurs",
    comments: 27,
    title: 'Sometimes i feel watched'
  },
];

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };
  }

  componentDidMount(): void {
    GalleryServices.gallery(0)
      .then(response => {
        let mainFlow = response.data.map(element => {
          if (element.images) {
            /*AccountServices.base(element.account_id)
              .then(result => {

              })
              .catch(error => {
                console.log(error);
              });*/
            return {
              id: element.id,
              image: element.images[0].link,
              favorite: element.favorite,
              ups: element.ups,
              downs: element.downs,
              title: element.title,
              vote: element.vote,
              description: element.images[0].description,
            };
          }
        });
        let mainFlowFiltered = mainFlow.filter(function(el) {
          return el != undefined;
        });
        this.setState({ gallery: mainFlowFiltered });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <LayoutContainer
        title={'Ouistigram'}
        font={'Catalunyademo'}
        fontSize={30}
      >
        <SearchBar
          inputContainerStyle={{ borderRadius: 50 }}
          containerStyle={[stylesheet.shadow_box, { borderTopWidth: 0 }]}
          placeholder="Rechercher..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <View style={styles.main_container}>
          <FlatList
            data={this.state.gallery}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ImageView image={item} />}
          />
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
  textinput: {
    marginLeft: 5,
    height: 50,
    marginRight: 5,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
});

export default HomeContainer;
