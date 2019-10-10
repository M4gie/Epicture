import React from 'react';
import {Text, View} from "react-native";
import LayoutContainer from "../components/layout/Layout";

const FavoriteContainer = () => {
    return (
        <LayoutContainer title={"FAVORITES"}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Display favorites pictures</Text>
            </View>
        </LayoutContainer>
    );
};

export default FavoriteContainer;
