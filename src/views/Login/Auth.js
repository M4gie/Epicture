import React from 'react';
import {View, Button, Linking} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'


class AuthContainer extends React.Component {

    connect = () => {
        this.props.navigation.navigate('Login');
    };

    render() {
        return (
            <View>
                <Button title="Connect with Imgur" onPress={this.connect}/>
            </View>
        );
    }
}

export default AuthContainer;
