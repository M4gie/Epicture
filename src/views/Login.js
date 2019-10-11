import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';
import NavBar from "../components/layout/NavBar";

class LoginContainer extends React.Component {
    render() {
        return (
            <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'hsl(218,15%,15%)'}}>
                <Text style={{color: "white"}}>LOGIN</Text>
                <NavBar {...this.props}/>
            </View>
        );
    }
};

export default LoginContainer;
