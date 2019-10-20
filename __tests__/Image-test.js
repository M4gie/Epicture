import 'react-native';
import React from 'react';
import CircleImage from "../src/components/image/CircleImage";
import SquareImage from "../src/components/image/SquareImage";
import renderer from 'react-test-renderer';

it('render circle image', () => {
  renderer.create(<CircleImage />);
});

it('render square image', () => {
  renderer.create(<SquareImage item={{item: {thumbnail: {uri:  "https://yt3.ggpht.com/a/AGF-l7-ey94kcSpRMakRkCtauQhH4lQp3EFjUcUR_A=s48-c-k-c0xffffffff-no-rj-mo"}}}} />);
});
