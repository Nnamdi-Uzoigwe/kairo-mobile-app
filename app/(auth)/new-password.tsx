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

export default function NewPassword() {
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
          contentContainerClassName="flex-grow justify-between items-center gap-10 px-4 py-10"
          keyboardShouldPersistTaps="handled"
        >
         <View className="w-full items-start">
            <AppText className="text-left" size={26} weight="bold" color="#630ED4">Kairo</AppText>
         </View>

         <View className="w-full">
          {/* Logo + Header */}
          <View className="items-center gap-4">
            <View className="items-center gap-1">
            <AppText color="#630ED4" weight="semibold" size={26}>Set new password</AppText>
              <AppText className="text-center" size={16}>Create a strong password to ensure your account stays secure and accessible only to you.</AppText>
            </View>
          </View>

          {/* Form */}
          <View className="w-full rounded-3xl mt-10 gap-4">

            {/* Password */}
            <View className="gap-2">
              <AppText size={16} weight="semibold">Password</AppText>
              <View>
                <TextInput
                    placeholder="••••••••"
                     textContentType={isOpen ? "password" : "name"}
                    secureTextEntry={!isOpen}
                    className="relative bg-white p-4 pl-10 rounded-xl placeholder:text-[#949494]"
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
                    className="relative bg-white p-4 pl-10 rounded-xl placeholder:text-[#949494]"
                    />
                <AntDesign className="absolute top-4 left-3" name="lock" size={16} color="#949494" />
                <TouchableOpacity onPress={() => setIsOpen(isOpen => !isOpen)} className="absolute top-4 right-4">
                    <Feather name={isOpen ? "eye-off" : "eye"} size={16} color="#949494" />
                </TouchableOpacity>
              </View>
            </View>

            <Button label="Save password" icon={<Feather name="arrow-right" size={20} color="white" />} onPress={() => router.replace("/(auth)/login")} iconPosition="right"/>
          </View>       
        </View>

        <View>
            <AppText>{"  "}</AppText>
        </View>
        
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}