import React from 'react';
import {Text, View} from "react-native";
import LayoutContainer from "../components/layout/Layout";

const HomeContainer = () => {
    return (
        <LayoutContainer title={"HOME"}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Main feed</Text>
            </View>
        </LayoutContainer>
    );
};

export default HomeContainer;
