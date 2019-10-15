import React from 'react';
import {WebView} from "react-native-webview";
import AsyncStorage from "@react-native-community/async-storage";
import {Linking} from "react-native";


class ImgurWebView extends React.Component {

    navigate = async (url) => {
        if (url) {
            url = url.replace('#', '&');
            let params = {};
            const regex = /([^&=]+)=([^&]*)/g;
            let m;

            while (m = regex.exec(url)) {
                params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            }
            await AsyncStorage.setItem('token', params.access_token);
            this.props.navigation.navigate('App');
        }
    };

    componentDidMount(): void {
        Linking.getInitialURL().then(url => {
            this.navigate(url);
        });

    }

    render() {
        const clientId = "b8d3bae6d415563";
        return (
            <WebView
                source={{uri: `https://api.imgur.com/oauth2/authorize?client_id=${clientId}&response_type=token`}}/>
        );
    }
};

export default ImgurWebView;
