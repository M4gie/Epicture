// UpDown.js

import React from 'react';
import {View} from 'react-native';
import GalleryService from '../../services/gallery';
import UpVote from './UpVote';
import DownVote from './DownVote';

class UpDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ups: this.props.ups,
      downs: this.props.downs,
      vote: this.props.vote,
    };
  }

  handleVote = (newVote, imageHash) => {
    let isDown = this.state.vote === 'down';
    let isUp = this.state.vote === 'up';

    if (newVote === 'up') {
      GalleryService.voting(imageHash, isUp ? 'veto' : 'up')
        .then(() => {
          this.setState({
            vote: isUp ? null : 'up',
            ups: isUp ? this.state.ups - 1 : this.state.ups + 1,
            downs: isDown ? this.state.downs - 1 : this.state.downs,
          });
        })
        .catch(error => {
          console.debug(error);
        });
    } else if (newVote === 'down') {
      GalleryService.voting(imageHash, isDown ? 'veto' : 'down')
        .then(() => {
          this.setState({
            vote: isDown ? null : 'down',
            downs: isDown ? this.state.downs - 1 : this.state.downs + 1,
            ups: isUp ? this.state.ups - 1 : this.state.ups,
          });
        })
        .catch(error => {
          console.debug(error);
        });
    }
  };

  render() {
    const imageHash = this.props.imageHash;

    return (
      <View style={{flexDirection: 'row'}}>
        <UpVote
          iconSize={20}
          ups={this.state.ups}
          imageHash={imageHash}
          handleVote={this.handleVote}
          vote={this.state.vote}
        />
        <DownVote
          iconSize={20}
          downs={this.state.downs}
          imageHash={imageHash}
          handleVote={this.handleVote}
          vote={this.state.vote}
        />
      </View>
    );
  }
}

export default UpDown;
