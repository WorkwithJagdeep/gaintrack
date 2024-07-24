import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="(profile)"
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerShown: false,
        tabBarStyle: {
          // paddingVertical: 10,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          borderTopColor: "none",
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: true,
          title: "Home",
          headerLeft: () => (
            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                    }}
                  >
                    J
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Market
              </Text>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <AntDesign name="pluscircle" size={24} color="white" />
            </View>
          ),
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="favorite"
              size={24}
              color={focused ? "white" : "rgba(255,255,255,0.5)"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(order)"
        options={{
          headerShown: true,
          title: "orderbook",
          headerLeft: () => (
            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                    }}
                  >
                    J
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Orderbook
              </Text>
            </View>
          ),
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="newspaper-outline"
              size={24}
              color={focused ? "white" : "rgba(255,255,255,0.5)"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(portfolio)"
        options={{
          title: "portfolio",
          headerShown: true,
          headerLeft: () => (
            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                    }}
                  >
                    J
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Portfolio
              </Text>
            </View>
          ),
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          tabBarIcon: ({ color, focused }) => (
            <Foundation
              name="graph-pie"
              size={24}
              color={focused ? "white" : "rgba(255,255,255,0.5)"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(news)"
        options={{
          title: "Explore",
          headerTitle: "",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: () => (
            <View
              style={{
                paddingLeft: 15,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("@/assets/images/logo.png")}
                style={{
                  width: 160,
                  height: 50,
                  objectFit: "contain",
                }}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                paddingRight: 20,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 21,
                  fontWeight: "600",
                }}
              >
                News
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="appstore1"
              size={24}
              color={focused ? "white" : "rgba(255,255,255,0.5)"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "profile",
          headerShown: true,
          headerLeft: () => (
            <View
              style={{
                paddingHorizontal: 20,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginRight: 10,
                }}
              >
                <View
                  style={{
                    width: 35,
                    height: 35,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    borderRadius: 50,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                    }}
                  >
                    J
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                }}
              >
                Account
              </Text>
            </View>
          ),
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="user"
              size={24}
              color={focused ? "white" : "rgba(255,255,255,0.5)"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
