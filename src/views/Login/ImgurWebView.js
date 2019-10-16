import React from 'react';
import {WebView} from 'react-native-webview';
import {Linking} from 'react-native';
import {API_IMGUR_CLIENT_ID} from './../../config';
import token from './../../shared/lib/Token';

class ImgurWebView extends React.Component {
  navigate = async url => {
    if (url) {
      url = url.replace('#', '&');
      let params = {};
      const regex = /([^&=]+)=([^&]*)/g;
      let m;

      while ((m = regex.exec(url))) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
      }
      await token.saveToken('BearerToken', params.access_token);
      await token.saveToken('username', params.account_username);
      this.props.navigation.navigate('App');
    }
  };

  componentDidMount(): void {
    Linking.getInitialURL().then(url => {
      this.navigate(url);
    });
  }

  render() {
    console.log(API_IMGUR_CLIENT_ID);
    return (
      <WebView
        source={{
          uri: `https://api.imgur.com/oauth2/authorize?client_id=${API_IMGUR_CLIENT_ID}&response_type=token`,
        }}
      />
    );
  }
}

export default ImgurWebView;
