import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import Header from "@/components/Common/Header";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  GoogleSignin.configure();

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      router.replace("/(dashboard)");
    } catch (error) {
      console.log(error);
    }
  };
  // const _getUserAuth = async () => {
  //   const userVerified = await LocalAuthentication.authenticateAsync({
  //     requireConfirmation: true,
  //     cancelLabel: "Authent",
  //   });
  //   console.log(userVerified);
  // };
  // useEffect(() => {
  //   _getUserAuth();

  //   return () => {};
  // }, []);

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        // Background Linear Gradient
        colors={["red", "transparent"]}
        style={styles.background}
      >
        <Image
          source={{
            uri: "https://static.tradingview.com/static/bundles/leo-look-480@2x.f65f6a0e4094e022fcfe.webp",
          }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            alignContent: "center",
          }}
        />
      </LinearGradient>
      <Header />
      <View>
        <View
          style={{
            paddingHorizontal: 7,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "800",
              fontSize: 36,
              marginBottom: 10,
            }}
          >
            Conquer the Market. Own Your Future
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            Join 60 million+ investors & traders. Learn, collaborate, and
            conquer the market together
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            marginBottom: 30,
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={_signIn}
            style={{
              backgroundColor: "white",
              borderRadius: 100,
              paddingHorizontal: 20,
              paddingVertical: 20,
              width: "48%",
              marginRight: 15,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <AntDesign name="google" size={24} color="black" />
            <Text
              style={{
                marginLeft: 7,
                fontSize: 16,
                color: "black",
              }}
            >
              Google
            </Text>
          </Pressable>
          <View
            style={{
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 100,
              paddingHorizontal: 20,
              paddingVertical: 20,
              width: "48%",
              marginRight: 15,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="explore" size={24} color="white" />
            <Text
              style={{
                marginLeft: 7,
                fontSize: 16,
                color: "white",
              }}
            >
              Explore
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

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
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
