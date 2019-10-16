import React, {Component} from 'react';
import token from "../../shared/lib/Token";
import {Linking, Text, View} from "react-native";

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
            await token.saveToken(params.access_token);
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
