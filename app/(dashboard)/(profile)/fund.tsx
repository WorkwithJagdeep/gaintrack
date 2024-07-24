import { StyleSheet, Text, View } from "react-native";
import React from "react";

const fund = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 20,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#161617",
        }}
      >
        <View
          style={{
            width: "100%",
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 15,
            }}
          >
            Available margin
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 37,
              marginTop: 5,
            }}
          >
            ₹ 325.00
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "48%",
            height: 60,
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "black",

              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Add fund
          </Text>
        </View>
        <View
          style={{
            width: "48%",
            height: 60,
            backgroundColor: "#AB7FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",

              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Withdrawl
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingVertical: 30,
          width: "100%",
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            color: "white",

            fontSize: 14,
            fontWeight: "500",
          }}
        >
          My Transcations
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 21,
            marginTop: 30,
          }}
        >
          No transcation history
        </Text>
      </View>
    </View>
  );
};

export default fund;

const styles = StyleSheet.create({});
