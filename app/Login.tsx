import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Common/Header";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const { user }: any = GoogleSignin.getCurrentUser();

  const _getUserBioMetricAuth = async () => {
    const userVerified = await LocalAuthentication.authenticateAsync({
      requireConfirmation: true,
      cancelLabel: "Authent",
    });
    if (userVerified.success) {
      router.replace("/(dashboard)");
    }
  };

  useEffect(() => {
    _getUserBioMetricAuth();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View
        style={{
          width: "100%",
          paddingHorizontal: 10,
          marginTop: 50,
        }}
      >
        <View
          style={{
            display: "flex",
            // alignItems: "center",
          }}
        >
          <View>
            {user.photo ? (
              <Image
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 70,
                }}
                source={{
                  uri: `${user?.photo}`,
                }}
              />
            ) : (
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#181918",
                  borderRadius: 70,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="user" size={34} color="white" />
              </View>
            )}
          </View>
          <Text style={{ color: "white", fontSize: 26, marginTop: 7 }}>
            {user?.name}
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.6)",
              marginVertical: 10,
            }}
          >
            We're so glad to see you again, Enter your 4 digit PIN.
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#148ff2",
              marginVertical: 10,
              height: 50,
              borderRadius: 10,
            }}
          ></View>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#148ff2",
              // marginVertical: 10,
              height: 50,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              Continue
            </Text>
          </View>
          <Pressable
            onPress={_getUserBioMetricAuth}
            style={{
              borderWidth: 1,
              borderColor: "#148ff2",
              paddingHorizontal: 10,
              borderRadius: 10,
              paddingVertical: 15,
              marginTop: 30,
              marginBottom: 10,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="fingerprint" size={24} color="#148ff2" />
            <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
              Login with fingerprint
            </Text>
          </Pressable>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("window").width,
    flex: 1,
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
});
