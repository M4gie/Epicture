import React from 'react';
import {Button, Text, View} from 'react-native';
import LayoutContainer from '../components/layout/Layout';
import AsyncStorage from "@react-native-community/async-storage";
import GalleryServices from "../services/gallery";
import AccountServices from "../services/account";

const FavoriteContainer = () => {
    const handleClick = async () => {
        await AccountServices.favorites()
        .then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

    };
    return (
        <LayoutContainer title={"Mentions J'aime"}>
            <Button title="Deconnexion" onPress={handleClick}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Display favorites pictures</Text>
            </View>
        </LayoutContainer>
    );
};

export default FavoriteContainer;
