import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginContainer from "./src/views/Login";
import HomeContainer from "./src/views/Home";
import UserContainer from "./src/views/User";
import FavoriteContainer from "./src/views/Favorite";
import UploadContainer from "./src/views/Upload";


const AppNavigator = createStackNavigator(
    {
        Login: LoginContainer,
        Home: HomeContainer,
        User: UserContainer,
        Favorite: FavoriteContainer,
        Upload: UploadContainer,
    },
    {
        defaultNavigationOptions: {
            headerTitle: "Ouistigram",
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
