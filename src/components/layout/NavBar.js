import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeContainer from "../../views/Home";
import UploadContainer from "../../views/Upload";
import FavoriteContainer from "../../views/Favorite";
import UserContainer from "../../views/User";

const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name={"home"} color={tintColor} size={25}/>
                )
            }
        },
        Upload: {
            screen: UploadContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name={"plus-square"} color={tintColor} size={25}/>
                )
            }
        },
        Favorite: {
            screen: FavoriteContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name={"heart"} color={tintColor} size={25}/>
                )
            }
        },
        User: {
            screen: UserContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Icon name={"user"} color={tintColor} size={25}/>
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            showLabel: false,
            style: {backgroundColor: 'hsl(218,7%,21%)'}
        }
    }
);

const NavBar = createAppContainer(bottomTabNavigator);

export default NavBar;
