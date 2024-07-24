import { View, Text, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const index = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Pressable
        onPress={() => {
          router.push("/Profile");
        }}
        style={{
          paddingVertical: 20,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="rgba(255,255,255,0.6)"
          />
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
              }}
            >
              My accounts
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Accounts, tradebook, etc.
            </Text>
          </View>
        </View>
        <AntDesign name="right" size={24} color="rgba(255,255,255,0.6)" />
      </Pressable>
      <View
        style={{
          paddingVertical: 20,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="lock" size={24} color="rgba(255,255,255,0.6)" />
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
              }}
            >
              Change Pin
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Last changed on 07-03-2023
            </Text>
          </View>
        </View>
        <AntDesign name="right" size={24} color="rgba(255,255,255,0.6)" />
      </View>
      <View
        style={{
          paddingVertical: 20,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome name="bank" size={24} color="rgba(255,255,255,0.6)" />
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
              }}
            >
              Bank detail
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Linked bank account details
            </Text>
          </View>
        </View>
        <AntDesign name="right" size={24} color="rgba(255,255,255,0.6)" />
      </View>
      <View
        style={{
          paddingVertical: 20,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="gift" size={24} color="rgba(255,255,255,0.6)" />
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
              }}
            >
              Refer & Earn
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Earn 20% of the brokerage
            </Text>
          </View>
        </View>
        <AntDesign name="right" size={24} color="rgba(255,255,255,0.6)" />
      </View>
      <Pressable
        onPress={async () => {
          try {
            await GoogleSignin.signOut();
            router.replace("/");
          } catch (error) {
            console.error(error);
          }
        }}
        style={{
          paddingVertical: 20,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="logout" size={24} color="rgba(255,255,255,0.6)" />
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
              }}
            >
              Logout
            </Text>
          </View>
        </View>
        <AntDesign name="right" size={24} color="rgba(255,255,255,0.6)" />
      </Pressable>
    </View>
  );
};

export default index;
