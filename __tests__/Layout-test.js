import 'react-native';
import LayoutContainer from '../src/components/layout/Layout';
import React from 'react';
import renderer from 'react-test-renderer';

it('render circle image', () => {
  renderer.create(<LayoutContainer title={'Test'} font={''} fontSize={20} />);
});
