import 'react-native';
import React from 'react';
import CustomSearch from "../src/components/search/CustomSearch";
import renderer from 'react-test-renderer';

it('render CustomSearch', () => {
  renderer.create(<CustomSearch />);
});
