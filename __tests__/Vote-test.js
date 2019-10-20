import 'react-native';
import React from 'react';
import UpVote from '../src/components/vote/UpVote';
import DownVote from '../src/components/vote/DownVote';
import renderer from 'react-test-renderer';

it('render UpVote', () => {
  renderer.create(<UpVote />);
});

it('render DownVote', () => {
  renderer.create(<DownVote />);
});
