import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 40,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("window").width,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "black",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "80%",
    width: 400,
    backgroundColor: "black",
  },
  image: {
    width: 140,
    height: 60,
    resizeMode: "contain",
  },
});
