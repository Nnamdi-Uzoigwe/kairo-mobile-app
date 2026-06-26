import Heading from "@/components/onboarding/Heading";
import AppText from "@/components/ui/AppText";
import Button from "@/components/ui/Button";
import { router } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StepThree() {
    return (
        <SafeAreaView className="flex-1 items-center justify-between bg-[#ede9fe]">
            {/* heading */}
            <Heading />
            <View className="flex px-4 items-center">
                <Image 
                    source={require("@/assets/images/step-three.png")}
                    className="px-4"
                    />
                <AppText weight="bold" size={21} className="text-center">Never miss a follow-up</AppText>
                <AppText>Set reminders and get notified before it's too late.</AppText>
            </View>

            <View className="w-full px-3">
                <Button label="Get Started" onPress={() => router.replace("/(auth)/login")}/>
            </View>

        </SafeAreaView>
    )
}