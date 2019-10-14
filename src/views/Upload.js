import React from 'react';
import {Text, View} from 'react-native';
import LayoutContainer from '../components/layout/Layout';

const UploadContainer = () => {
  return (
    <LayoutContainer title={'Ajouter une photo'}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Picture upload</Text>
      </View>
    </LayoutContainer>
  );
};

export default UploadContainer;
