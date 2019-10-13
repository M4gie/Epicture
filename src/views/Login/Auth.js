import React from 'react';
import {View, Button} from "react-native";
import AsyncStorage from '@react-native-community/async-storage'


class AuthContainer extends React.Component {
    static navigationOptions = {
        title: 'Je suis la page pas belle',
    };

    render() {
        return (
            <View>
                <Button title="Connexion" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

export default AuthContainer;
