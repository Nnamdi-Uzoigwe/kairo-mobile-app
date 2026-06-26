import Heading from "@/components/onboarding/Heading";
import AppText from "@/components/ui/AppText";
import Button from "@/components/ui/Button";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StepTwo() {
    return (
        <SafeAreaView className="flex-1 items-center justify-between bg-[#ede9fe]">
            {/* heading */}
            <Heading />
            <View className="flex px-4 items-center gap-2">
                <Image 
                    source={require("@/assets/images/step-two.png")}
                    className="px-4"
                    />
                <AppText weight="bold" size={26} className="text-center">Track every stage</AppText>
                <AppText>From applied to offer - know exactly where you stand.</AppText>
            </View>

            <View className="w-full px-3">
                <Button 
                    label="Next" 
                    onPress={() => router.push("/(onboarding)/step-three")}
                    icon={<Feather name="arrow-right" size={22} color="white" />}
                    iconPosition="right"
                />
            </View>
        </SafeAreaView>
    )
}