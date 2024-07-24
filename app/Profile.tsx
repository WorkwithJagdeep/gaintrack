import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Entypo } from "@expo/vector-icons";

const Profile = () => {
  const [userData, setUserData] = useState<any>({});
  const getUser = async () => {
    try {
      const { user }: any = await GoogleSignin.signInSilently();
      setUserData(user);
    } catch (err) {}
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "black",
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          paddingVertical: 30,
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {userData?.photo ? (
          <View
            style={{
              position: "relative",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: 50,
                bottom: 0,
                position: "absolute",
                zIndex: 10,
                right: 0,
              }}
            >
              <Entypo name="pencil" size={24} color="#148ff2" />
            </View>
            <Image
              style={{
                width: 90,
                height: 90,
                borderRadius: 100,
              }}
              source={{
                uri: `${userData?.photo}`,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 100,
              backgroundColor: "#c5c5ff",
            }}
          ></View>
        )}
      </View>
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 14,
          }}
        >
          Email Address
        </Text>
        <View
          style={{
            width: "100%",
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.4)",
            marginTop: 8,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 17,
            }}
          >
            {userData.email}
          </Text>
        </View>
        <View></View>
      </View>
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 14,
          }}
        >
          Name
        </Text>
        <View
          style={{
            width: "100%",
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.4)",
            marginTop: 8,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 17,
            }}
          >
            {userData.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: 14,
          }}
        >
          Name
        </Text>
        <View
          style={{
            width: "100%",
            paddingVertical: 18,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.4)",
            marginTop: 8,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 17,
            }}
          >
            {userData.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
