import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    StyleSheet,
    Text
} from 'react-native';
import token from "../../shared/lib/Token";

class AuthLoadingContainer extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = token.getToken();
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.main_container}>
                <ActivityIndicator />
                <Text style={styles.text}>Ça charge bite</Text>
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'hsl(218,15%,15%)',
    },
    text: {
        textAlign: "center",
        color: "white"
    },
});

export default AuthLoadingContainer
