import React from "react";
import { createStackNavigator } from "react-navigation";
import { Button } from 'react-native';

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

// navigation
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(107, 82, 174)"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);
