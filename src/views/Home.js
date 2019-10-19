import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import LayoutContainer from '../components/layout/Layout';
import ImageView from '../components/image/ImageView';
import stylesheet from '../styles/styles';
import GalleryServices from '../services/gallery';
import CustomSearch from '../components/search/CustomSearch';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      sort: 'viral',
      search: '',
    };
  }

  componentDidMount(): void {
    this.getGallery();
  }

  getGallery = () => {
    GalleryServices.gallery(0, this.state.sort)
      .then(response => {
        let mainFlow = response.data.map(element => {
          if (element.images) {
            return {
              id: element.id,
              image: element.images[0].link,
              favorite: element.favorite,
              ups: element.ups,
              downs: element.downs,
              title: element.title,
              vote: element.vote,
              username: element.account_url,
              description: element.images[0].description,
            };
          }
        });
        let mainFlowFiltered = mainFlow.filter(function(el) {
          return el != undefined;
        });
        this.setState({gallery: mainFlowFiltered});
      })
      .catch(error => {
        console.debug(error);
      });
  };

  updateSearch = search => {
    this.setState({search});
    GalleryServices.gallerySearch(0, search, this.state.sort)
      .then(response => {
        let mainFlow = response.data.map(element => {
          if (element.images) {
            return {
              id: element.id,
              image: element.images[0].link,
              favorite: element.favorite,
              ups: element.ups,
              downs: element.downs,
              title: element.title,
              vote: element.vote,
              username: element.account_url,
              description: element.images[0].description,
            };
          }
        });
        let mainFlowFiltered = mainFlow.filter(function(el) {
          return el != undefined;
        });
        this.setState({gallery: mainFlowFiltered});
      })
      .catch(error => {
        console.debug(error);
      });
  };

  changeSort = () => {
    const sorts = ['viral', 'top', 'time'];
    let sort_index = sorts.indexOf(this.state.sort);

    if (sort_index >= sorts.length - 1) {
      this.state.sort = sorts[0];
    } else {
      this.state.sort = sorts[sort_index + 1];
    }
    if (this.state.search !== '') {
      this.updateSearch(this.state.search);
    } else {
      this.getGallery();
    }
  };

  render() {
    return (
      <LayoutContainer
        title={'Ouistigram'}
        font={'Catalunyademo'}
        fontSize={30}>
        <CustomSearch
          search={this.state.search}
          updateSearch={this.updateSearch}
          changeSort={this.changeSort}
          sort={this.state.sort}
        />
        <View style={styles.main_container}>
          <FlatList
            data={this.state.gallery}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ImageView image={item} />}
          />
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
