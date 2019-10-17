// UpDown.js

import React from 'react';
import {StyleSheet, View} from 'react-native';
import UpVote from './UpVote';
import DownVote from './DownVote';
import GalleryService from '../../services/gallery';

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
    if (newVote === 'up') {
      GalleryService.voting(imageHash, this.state.vote === 'up' ? 'veto' : 'up')
        .then(response => {
          console.log(response);
          this.setState({
            vote: this.state.vote === 'up' ? null : 'up',
            ups: this.state.vote === 'up' ? this.state.ups + 1 : this.state.ups,
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else if (newVote === 'down') {
      GalleryService.voting(
        imageHash,
        this.state.vote === 'down' ? 'veto' : 'down',
      )
        .then(response => {
          console.log(response);
          this.setState({
            vote: this.state.vote === 'down' ? null : 'down',
            downs:
              this.state.vote === 'down'
                ? this.state.downs + 1
                : this.state.downs,
          });
        })
        .catch(error => {
          console.log(error);
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

const styles = StyleSheet.create({});

export default UpDown;
