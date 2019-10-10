import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const navElements = [
    {iconName: "home", view: "Home", id: 0},
    {iconName: "plus-square", view: "Upload", id: 1},
    {iconName: "heart", view: "Favorite", id: 3},
    {iconName: "user", view: "User", id: 2},
];

const NavBar = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.navBar}>
            {navElements.map(element => {
                return (<Icon.Button
                    name={element.iconName}
                    onPress={() => navigation.navigate(element.view)}
                    color="white"
                    style={styles.icon}
                    size={25}
                    backgroundColor="transparent"
                    key={element.id}
                />);
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'red',
    },

    icon: {
        alignSelf: 'stretch'
    }
})

export default NavBar;
