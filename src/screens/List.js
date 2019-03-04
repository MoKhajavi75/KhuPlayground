import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FlatList
          style={{ flex: 1, alignSelf: "stretch", margin: 20 }}
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  backgroundColor: "#F0F8FF",
                  paddingVertical: 20,
                  marginBottom: 10,
                  borderRadius: 10
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 20
                  }}
                >
                  {item.name}
                </Text>
              </View>
            );
          }}
          keyExtractor={item => String(item.ID)}
        />
      </View>
    );
  }
}

export default List;
