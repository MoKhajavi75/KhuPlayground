import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import Axios from "axios";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: []
    };

    this.loadData();
  }

  loadData() {
    Axios.get("https://rallycoding.herokuapp.com/api/music_albums").then(
      response => this.setState({ data: response.data, isLoading: false })
    );
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
          backgroundColor: "#FF7F50",
          paddingVertical: 20,
          marginBottom: 10,
          borderRadius: 10
        }}
        onPress={() => alert(item.artist)}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 32
          }}
        >
          {item.title}
        </Text>

        <Image
          style={{ width: 300, height: 300, resizeMode: "center" }}
          source={{ uri: item.image }}
        />
      </TouchableOpacity>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    } else {
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
            renderItem={({ item }) => this.renderItem({ item })}
            keyExtractor={item => String(item.ID)}
          />

          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "coral",
              margin: 40
            }}
            onPress={() => {
              AsyncStorage.clear().then(() => {
                alert("bye bye");
              });
            }}
          >
            <Text>{"Logout!"}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

export default List;
