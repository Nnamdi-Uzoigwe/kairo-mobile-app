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
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Button from "@/components/ui/Button";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
    const [isOpen, setIsOpen] = useState(false);

    function handleLogin() {
        console.log("login success!")
    }
  return (
    <SafeAreaView className="flex-1 bg-[#ede9fe]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="flex-grow justify-center items-center gap-10 px-4 py-10"
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo + Header */}
          <View className="items-center gap-4">
            <View className="relative bg-[#630ED4] w-16 h-16 rounded-xl items-center justify-center">
              <MaterialCommunityIcons name="star-four-points" size={24} color="white" />
              <MaterialCommunityIcons
                name="star-four-points"
                size={10}
                color="white"
                style={{ position: "absolute", bottom: 8, right: 8 }}
              />
              <MaterialCommunityIcons
                name="star-four-points"
                size={10}
                color="white"
                style={{ position: "absolute", top: 8, right: 8 }}
              />
            </View>

            <View className="items-center gap-1">
              <AppText color="#630ED4" weight="bold" size={26}>Welcome Back!</AppText>
              <AppText size={17}>Log in to your kairo account</AppText>
            </View>
          </View>

          {/* Form */}
          <View className="bg-white w-full rounded-3xl p-6 gap-4">
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

            {/* Password */}
            <View className="gap-2">
              <AppText size={16} weight="semibold">Password</AppText>
              <View>
                <TextInput
                    placeholder="••••••••"
                    textContentType={isOpen ? "password" : "name"}
                    secureTextEntry={!isOpen}
                    className="relative bg-[#F1F3FF] p-4 pl-10 rounded-xl placeholder:text-[#949494]"
                    />
                <AntDesign className="absolute top-4 left-3" name="lock" size={16} color="#949494" />
                <TouchableOpacity onPress={() => setIsOpen(isOpen => !isOpen)} className="absolute top-4 right-4">
                    <Feather name={isOpen ? "eye-off" : "eye"} size={16} color="#949494" />
                </TouchableOpacity>
              </View>
            </View>

            <Button label="Log in" icon={<Feather name="arrow-right" size={20} color="white" />} onPress={handleLogin} iconPosition="right"/>
          </View>

          <View className="flex-row gap-2 items-center">
            <AppText size={16}>Don't have an account?</AppText>
            <TouchableOpacity onPress={() => router.replace("/(auth)/signup")}>
             <AppText color="#630ED4" weight="semibold" size={16}>Sign up</AppText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}