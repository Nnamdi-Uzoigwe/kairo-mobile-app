import { TouchableOpacity, View } from "react-native";
import AppText from "../ui/AppText";
import { useRouter } from "expo-router";
export default function Heading() {
    const router = useRouter();
    return (
        <View className="w-full px-4 flex-row justify-between">
            <AppText color="#7C3AED" size={24} weight="bold">Kairo</AppText>

            <TouchableOpacity onPress={() => router.push("/step-three")}>
                <AppText weight="bold">Skip</AppText>
            </TouchableOpacity>
        </View>
    )
}