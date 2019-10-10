import React from 'react';
import {Text, View} from "react-native";
import LayoutContainer from "../components/layout/Layout";

const UserContainer = () => {
    return (
        <LayoutContainer title={"USER"}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Personal information</Text>
            </View>
        </LayoutContainer>
    );
};

export default UserContainer;
