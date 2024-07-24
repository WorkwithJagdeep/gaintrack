import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Position = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 35,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Nothing here, yet...
        </Text>
        <Text
          style={{
            color: "rgba(255, 255, 255,0.6)",
            fontSize: 14,
            marginTop: 7,
            textAlign: "center",
          }}
        >
          You don't have any orders, Place a new order from the watchlist
        </Text>
        <Text
          style={{
            color: "royalblue",
            fontSize: 14,
            marginTop: 13,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Go to watchlist
        </Text>
      </View>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({});
