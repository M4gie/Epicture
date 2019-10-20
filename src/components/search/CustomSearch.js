// CustomSearch.js

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import stylesheet from '../../styles/styles';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomSearch = props => {
  const {updateSearch, changeSort, search, sort} = props;

  return (
    <View style={[styles.search_container, stylesheet.shadow_box]}>
      <View style={{width: '90%'}}>
        <SearchBar
          inputContainerStyle={{borderRadius: 50}}
          containerStyle={[stylesheet.shadow_box, styles.search]}
          placeholder="Rechercher..."
          onChangeText={search => updateSearch(search)}
          value={search}
        />
      </View>
      <View style={styles.filter_view}>
        <TouchableOpacity onPress={() => changeSort()}>
          <Icon name={'filter'} color={'white'} size={20} />
          <Text style={stylesheet.white}>{sort}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#21252c',
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
    backgroundColor: '#21252c',
    elevation: 0,
  },
});

export default CustomSearch;
