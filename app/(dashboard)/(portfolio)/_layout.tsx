import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";

import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "black", borderColor: "red" },
        tabBarIndicatorStyle: {
          borderColor: "white", // Change this to the desired active tab border color
          borderBottomWidth: 0.5, // Ad
        },

        tabBarContentContainerStyle: { justifyContent: "flex-start" },
      }}
    >
      <MaterialTopTabs.Screen
        name="Holdings"
        options={{
          title: "Holdings",
        }}
      />
      <MaterialTopTabs.Screen
        name="Position"
        options={{
          title: "Positions",
        }}
      />
    </MaterialTopTabs>
  );
}
