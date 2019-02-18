import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF"
        }}
      >
        <Text>{"To be continued..."}</Text>
      </View>
    );
  }
}

export default App;
