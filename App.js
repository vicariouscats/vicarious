import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Auth = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen
});

const MainApp = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
});

const Root = createSwitchNavigator({
  Auth: Auth,
  MainApp: MainApp,
  initialRouteName: "Auth"
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});

export default App;

//<HomeScreen />
// <ProfileScreen />
// <SearchScreen />
