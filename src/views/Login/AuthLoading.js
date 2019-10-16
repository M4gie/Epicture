import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import token from "../../shared/lib/Token";

class AuthLoadingContainer extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await token.getToken('BearerToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.main_container}>
        <ActivityIndicator size={'large'} />
        <Text style={styles.text}>Ouistigram</Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'hsl(218,15%,15%)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    marginVertical: 30,
    fontFamily: 'Catalunyademo',
  },
});

export default AuthLoadingContainer
