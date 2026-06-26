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

export default function ForgotPassword() {
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
              <MaterialIcons name="lock-reset" size={24} color="#630ED4" />
            </View>

            <View className="items-center w-[80%] gap-1">
              <AppText color="#630ED4" weight="bold" size={26}>Reset your password</AppText>
              <AppText className="text-center" size={17}>Enter your email and we'll send you a reset code.</AppText>
            </View>
          </View>

          {/* Form */}
          <View className="bg-white w-full rounded-3xl p-6 gap-6">
            {/* Email */}
            <View className="gap-2">
              <AppText size={16} weight="semibold">Email Address</AppText>
              <View>

                    <TextInput
                        placeholder="name@company.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        className="relative bg-[#F1F3FF] p-4 pl-10 rounded-xl placeholder:text-[#949494]"
                    />
                    <Feather className="absolute top-4 left-3" name="mail" size={16} color="#949494" />
                </View>
            </View>

           

            <Button label="Send Code" icon={<Feather name="arrow-right" size={20} color="white" />} onPress={() => router.replace("/(auth)/otp-verify")} iconPosition="right"/>
          
          <TouchableOpacity className="flex flex-row justify-center items-center gap-1" onPress={() => router.replace("/(auth)/login")}>
            <Feather name="arrow-left" size={16} color="#630ed4" />
             <AppText color="#630ED4" weight="semibold" size={16}>Back to login</AppText>
            </TouchableOpacity>
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