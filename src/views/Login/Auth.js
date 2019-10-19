import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const AuthContainer = props => {
  const connect = () => {
    this.props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("./../../assets/video/spin_cycle.mp4")}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode={'cover'}
        repeat
        style={styles.video}
      />
      <Text style={styles.appname}>Ouistigram</Text>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenue sur Ouistigram !</Text>
        <Text style={styles.description}>
          Créé par Steeven REGNAULT et Julien MONTAGNE
        </Text>
        <TouchableOpacity style={styles.buttonConnect} onPress={connect}>
          <Text style={styles.buttonText}>Se connecter avec Imgur</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    justifyContent: 'space-between',
    padding: 20,
    textAlign: 'center',
    flexDirection: 'column'
  },
  appname: {
    fontFamily: 'Catalunyademo',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    marginTop: 30,
  },
  title: {
    color: '#f4f4f4',
    marginTop: '50%',
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  description: {
    letterSpacing: 3,
    color: '#f4f4f4',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttonConnect: {
    marginTop: 50,
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    color: 'white',
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});

export default AuthContainer;
