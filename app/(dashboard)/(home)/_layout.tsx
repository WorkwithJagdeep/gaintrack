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
        tabBarIndicatorContainerStyle: { borderBottomColor: "red" },
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          backgroundColor: "black",
          borderBottomColor: "red",
          borderBottomWidth: 0,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "white", // Change this to the desired active tab border color
          borderBottomWidth: 2,
        },

        tabBarContentContainerStyle: { justifyContent: "flex-start" },
      }}
    >
      <MaterialTopTabs.Screen
        name="Watchlist"
        options={{
          title: "Watchlist1",
        }}
      />
      <MaterialTopTabs.Screen
        name="WatchList2"
        options={{
          title: "Watchlist 2",
        }}
      />
      <MaterialTopTabs.Screen
        name="Watchlist3"
        options={{
          title: "Watchlist 3",
        }}
      />
    </MaterialTopTabs>
  );
}
