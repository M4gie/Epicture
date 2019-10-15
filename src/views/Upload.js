import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import GalleryPicker from '../components/picker/GalleryPicker';
import CameraPicker from '../components/picker/CameraPicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import stylesheet from '../styles/styles';

const UploadContainer = () => {
  return (
    <LayoutContainer title={'Ajouter une photo'} font={''} fontSize={20}>
      <View style={styles.main_container}>
        <View
          style={{flex: 3, borderBottomWidth: 1, borderBottomColor: 'white'}}>
          <View style={styles.content}>
            <Icon name={'image'} color={'grey'} size={100} />
            <Text style={[stylesheet.white, styles.content_text]}>
              Envoyer une image depuis votre librairie
            </Text>
            <GalleryPicker />
          </View>
        </View>
        <View style={{flex: 3}}>
          <View style={styles.content}>
            <Icon name={'camera'} color={'grey'} size={100} />
            <Text style={[stylesheet.white, styles.content_text]}>
              Utiliser votre appareil photo pour envoyer une photo
            </Text>
            <CameraPicker />
          </View>
        </View>
      </View>
    </LayoutContainer>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'hsl(213,7%,25%)',
    padding: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content_text: {
    margin: 10,
  },
});

export default UploadContainer;
