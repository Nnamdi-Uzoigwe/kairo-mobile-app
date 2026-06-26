import AppText from "@/components/ui/AppText";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/ui/Button";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import OtpInput from "@/components/ui/OtpInput";

export default function OtpVerify() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    function handleLogin() {
        // setTimeout(() => {
        //   setLoading(true);
        // }, 3000)
        // console.log("login success!");
        // setLoading(false);
    }
  return (
    <SafeAreaView className="flex-1 bg-[#ede9fe]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="flex-grow justify-between items-center gap-10 px-4 py-10"
          keyboardShouldPersistTaps="handled"
        >

        <View className="w-full items-start">
            <AppText className="text-left" size={26} weight="bold" color="#630ED4">Kairo</AppText>
        </View>
     
        <View className="w-full gap-8">

          {/* Logo + Header */}
          <View className="items-center gap-4">
            <View className="relative bg-[#e9ddf8] w-16 h-12 rounded-xl items-center justify-center">
              <MaterialIcons name="mark-email-read" size={24} color="#630ED4" />
            </View>

            <View className="items-center w-[80%] gap-1">
              <AppText color="#630ED4" weight="bold" size={26}>Check your email</AppText>
              <AppText className="text-center" size={17}>We sent a 6-digit code to your email.</AppText>
            </View>
          </View>

          {/* Form */}
          <View className="w-full rounded-3xl p-6 gap-6">
           <OtpInput />

            <Button label="Confirm Code" icon={<Feather name="arrow-right" size={20} color="white" />} onPress={() => router.replace("/(auth)/new-password")} iconPosition="right"/>
          
            <View className="flex-row gap-2 justify-center items-center">
                <AppText size={16}>Didn't receive a code?</AppText>
            <TouchableOpacity>
                <AppText size={16} color="#630ED4">Resend in 05:00</AppText>
            </TouchableOpacity>
            </View>
          </View>

        </View>

        <View>
            <AppText>{" "}</AppText>
        </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}