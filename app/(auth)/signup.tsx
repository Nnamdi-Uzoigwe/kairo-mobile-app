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
import { useState } from "react";
import { router } from "expo-router";

export default function Signup() {
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
            <View className="items-center gap-1">
            <AppText color="#630ED4" weight="semibold" size={26}>Welcome to Kairo!</AppText>
              <AppText size={18}>Create your account</AppText>
            </View>
          </View>

          {/* Form */}
          <View className="bg-white w-full rounded-3xl p-6 gap-4">
            {/* Full name */}
            <View className="gap-2">
              <AppText size={16} weight="semibold">Full name</AppText>
              <View>

                    <TextInput
                        placeholder="John Doe"
                        autoCapitalize="none"
                        className="relative bg-[#F1F3FF] p-4 pl-10 rounded-xl placeholder:text-[#949494]"
                    />
                    <Feather className="absolute top-4 left-3" name="user" size={16} color="#949494" />
                </View>
            </View>

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

            {/* Password */}
            <View className="gap-2">
              <AppText size={16} weight="semibold">Confirm Password</AppText>
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

            <Button label="Sign up" icon={<Feather name="arrow-right" size={20} color="white" />} onPress={handleLogin} iconPosition="right"/>
          </View>

          <View className="flex-row gap-2 items-center">
            <AppText size={16}>Already have an account?</AppText>
            <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
             <AppText color="#630ED4" weight="semibold" size={16}>Sign in</AppText>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}