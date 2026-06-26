import Heading from "@/components/onboarding/Heading";
import AppText from "@/components/ui/AppText";
import Button from "@/components/ui/Button";
import { router } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';


export default function StepOne() {
    return (
        <SafeAreaView className="flex-1 items-center justify-between bg-[#ede9fe]">
            {/* heading */}
            <Heading />
            <View className="flex px-3 items-center">
                <Image 
                    source={require("@/assets/images/step-one.png")}
                    className="px-4"
                    />
                <AppText weight="bold" size={21} className="text-center">Stay on top of every application</AppText>
                <AppText>Log jobs you've applied to and never lose track again.</AppText>
            </View>

            <View className="w-full px-3">
                <Button 
                    label="Next" 
                    onPress={() => router.push("/step-two")}
                    icon={<Feather name="arrow-right" size={22} color="white" />}
                    iconPosition="right"
                />
            </View>
        </SafeAreaView>
    )
}