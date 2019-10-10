import React from 'react';
import {Text} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginContainer from "./src/views/Login";
import HomeContainer from "./src/views/Home";
import UserContainer from "./src/views/User";
import FavoriteContainer from "./src/views/Favorite";
import UploadContainer from "./src/views/Upload";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

/*const bottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeContainer,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon.Button
                        name={"home"}
                        color={tintColor}
                        size={25}
                        backgroundColor="transparent"
                    />
                )
            }
        },
        Upload: {
            screen: UploadContainer,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon.Button
                        name={"plus-square"}
                        color={tintColor}
                        size={25}
                        backgroundColor="transparent"
                    />
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#eb6e3d'
        }
    }
);*/


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

const AppContainer = createAppContainer(bottomTabNavigator);
