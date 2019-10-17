// CustomSearch.js

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import stylesheet from '../../styles/styles';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

class CustomSearch extends React.Component {
  render() {
    const {updateSearch, search} = this.props;

    return (
      <View style={[styles.search_container, stylesheet.shadow_box]}>
        <View style={{width: '90%'}}>
          <SearchBar
            inputContainerStyle={{borderRadius: 50}}
            containerStyle={[stylesheet.shadow_box, styles.search]}
            placeholder="Rechercher..."
            onChangeText={(search) => updateSearch(search)}
            value={search}
          />
        </View>
        <View style={styles.filter_view}>
          <TouchableOpacity>
            <Icon name={'filter'} color={'white'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search_container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'hsl(218,15%,15%)',
  },
  filter_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  search: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    height: '100%',
    backgroundColor: 'hsl(218,15%,15%)',
    elevation: 0,
  },
});

export default CustomSearch;
