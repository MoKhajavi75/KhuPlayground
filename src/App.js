import React, { Component } from "react";
import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "yellow"
          }}
        >
          <Text style={{ fontSize: 20, color: "black" }}>{"Top"}</Text>
        </View>

        <LinearGradient
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch"
          }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={["red", "blue"]}
        >
          <Text style={{ fontSize: 20, color: "white" }}>{"Gradient"}</Text>
        </LinearGradient>
      </View>
    );
  }
}

export default App;
