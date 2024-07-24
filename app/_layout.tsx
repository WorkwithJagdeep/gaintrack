import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const getUser = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      if (userInfo) {
        // router.push("(dashboard)");
        router.push("/(news)");
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      getUser(); // Fetch user data if available.
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="(news)">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen
          name="Profile"
          options={{
            title: "",
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerLeft: () => (
              <View
                style={{
                  paddingHorizontal: 10,
                }}
              >
                <AntDesign name="left" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
