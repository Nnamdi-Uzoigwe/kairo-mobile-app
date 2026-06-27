import './globals.css';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [loaded] = useFonts({
    "DMSans-Light": require("@/assets/fonts/DMSans-Light.ttf"),
    "DMSans-SemiBold": require("@/assets/fonts/DMSans-SemiBold.ttf"),
    "DMSans-Regular": require("@/assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("@/assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("@/assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Italic": require("@/assets/fonts/DMSans-Italic.ttf"),
    "DMSans-ExtraBold": require("@/assets/fonts/DMSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;


  return (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='(tabs)' />
    <Stack.Screen name='notifications' />
    <Stack.Screen name='notifications/preferences' />
    <Stack.Screen name='applications/add' />
    <Stack.Screen name='applications/[id]' />
  </Stack>
  )
}

