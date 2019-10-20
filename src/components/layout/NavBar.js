import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeContainer from '../../views/Home';
import UploadContainer from '../../views/Upload';
import FavoriteContainer from '../../views/Favorite';
import UserContainer from '../../views/User';
import AuthLoadingContainer from '../../views/Login/AuthLoading';
import AuthContainer from '../../views/Login/Auth';
import ImgurWebView from '../../views/Login/ImgurWebView';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name={'home'} color={tintColor} size={25} />
        ),
      },
    },
    Upload: {
      screen: UploadContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name={'plus-square'} color={tintColor} size={25} />
        ),
      },
    },
    Favorite: {
      screen: FavoriteContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name={'heart'} color={tintColor} size={25} />
        ),
      },
    },
    User: {
      screen: UserContainer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name={'user'} color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    lazy: false,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      showLabel: false,
      keyboardHidesTabBar: false,
      style: {
        backgroundColor: '#323539',
        paddingBottom: 2,
        borderTopColor: '#3f4346',
      },
    },
  },
);

const AppStack = createAppContainer(bottomTabNavigator);
const AuthStack = createStackNavigator({
  SignIn: {screen: AuthContainer, navigationOptions: {header: null}},
  Login: {screen: ImgurWebView},
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingContainer,
      App: AppStack,
      Auth: {screen: AuthStack, path: ''},
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
