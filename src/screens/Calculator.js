import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Calculator extends Component {
  render() {
    return (
      // Container
      <View style={styles.container}>
        {/* Top Row */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "#F0F8FF"
          }}
        >
          <Text style={{ marginLeft: 20, marginRight: 30 }}>{"View"}</Text>
          <Text style={{ marginRight: 30 }}>{"Edit"}</Text>
          <Text>{"Help"}</Text>
        </View>

        {/* Result && Buttons */}
        <View
          style={{
            flex: 9,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            backgroundColor: "#ADD8E6",
            padding: 20
          }}
        >
          {/* Result */}
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              alignSelf: "stretch",
              backgroundColor: "#FFFFFF",
              padding: 10,
              borderWidth: 1
            }}
          >
            <Text style={{ fontSize: 20 }}>{this.props.mamad}</Text>
          </View>

          {/* Buttons */}
          <View
            style={{
              flex: 8,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "stretch",
              backgroundColor: "#ADD8E6",
              paddingVertical: 20
            }}
          >
            {/* 1st row */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                marginBottom: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"MC"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"MR"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"MS"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"M+"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderWidth: 1
                }}
              >
                <Text>{"M-"}</Text>
              </View>
            </View>

            {/* 2nd row */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                marginBottom: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"←"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"CE"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"C"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"±"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderWidth: 1
                }}
              >
                <Text>{"√"}</Text>
              </View>
            </View>

            {/* 3rd row */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                marginBottom: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"7"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"8"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"9"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"/"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderWidth: 1
                }}
              >
                <Text>{"%"}</Text>
              </View>
            </View>

            {/* 4th row */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
                marginBottom: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"4"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"5"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"6"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10,
                  borderWidth: 1
                }}
              >
                <Text>{"*"}</Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderWidth: 1
                }}
              >
                <Text>{"1/x"}</Text>
              </View>
            </View>

            {/* 5th && 6th Row*/}
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch"
              }}
            >
              {/* Left */}
              <View
                style={{
                  flex: 4,
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  marginRight: 10
                }}
              >
                {/* 1st Row */}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    marginBottom: 10
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      marginRight: 10,
                      borderWidth: 1
                    }}
                  >
                    <Text>{"1"}</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      marginRight: 10,
                      borderWidth: 1
                    }}
                  >
                    <Text>{"2"}</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      marginRight: 10,
                      borderWidth: 1
                    }}
                  >
                    <Text>{"3"}</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      borderWidth: 1
                    }}
                  >
                    <Text>{"-"}</Text>
                  </View>
                </View>

                {/* 2nd Row */}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch"
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      marginRight: 10,
                      borderWidth: 1
                    }}
                  >
                    <Text>{"0"}</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      marginRight: 10,
                      borderWidth: 1
                    }}
                  >
                    <Text>{"."}</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                      borderWidth: 1
                    }}
                  >
                    <Text>{"+"}</Text>
                  </View>
                </View>
              </View>

              {/* Right */}
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderWidth: 1
                }}
              >
                <Text>{"="}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});

export default Calculator;
