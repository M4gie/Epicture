import React, {Component} from 'react';
import {Linking, Text, View} from "react-native";
import token from "./../../shared/lib/Token";

class LoginStatusContainer extends Component {

    navigate = async (url) => {
        if (url) {
            url = url.replace('#', '&');
            let params = {};
            const regex = /([^&=]+)=([^&]*)/g;
            let m;

            while (m = regex.exec(url)) {
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
        return (
            <View>
                <Text>
                    Login Status
                </Text>
            </View>
        );
    }
}

export default LoginStatusContainer;
