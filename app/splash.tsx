import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppText from "@/components/ui/AppText";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect } from "react";
import { useRouter } from "expo-router";


export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
    setTimeout(() => {
        router.replace("/(onboarding)/step-one")
    }, 3000)
})


  return (
    <LinearGradient
      locations={[0, 0.15, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    //   className="justify-center items-center gap-6"
      style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}
      colors={["#7C3AED", "#915cee", "#ffffff"]}
      >
    
      <View className="bg-white p-3 transform rotate-3 shadow rounded-xl">
        <MaterialCommunityIcons name="briefcase" size={60} color="#7C3AED" />
      </View>

      <AppText color="white" weight="extrabold" size={30}>Kairo</AppText>
      <AppText color="white" size={18}>Track every opportunity</AppText>
      

    </LinearGradient>
  );
}

