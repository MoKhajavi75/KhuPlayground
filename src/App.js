import React, { Component } from "react";
import { Text, View } from "react-native";
import GDN from "./GetDeviceName";

class App extends Component {
  constructor() {
    super();

    this.state = {
      model: ""
    };
  }

  componentDidMount() {
    GDN.getDeviceName(myDevice => this.setState({ model: myDevice }));
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to React Native!</Text>
        <Text>{"This is your device: " + this.state.model}</Text>
      </View>
    );
  }
}

export default App;
