import React, { Component } from "react";
import { View, Text, AsyncStorage, TouchableOpacity } from "react-native";
import List from "./List";

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false
    };

    this.load();
  }

  async load() {
    let token = await AsyncStorage.getItem("token");

    if (token) {
      this.setState({ isRegistered: true });
    }
  }

  render() {
    if (!this.state.isRegistered) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "coral",
              margin: 20
            }}
            onPress={() => {
              AsyncStorage.setItem("token", "123").then(() => {
                alert("Token is registered!");
              });
            }}
          >
            <Text>{"Set Token"}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <List />;
    }
  }
}

export default Splash;
