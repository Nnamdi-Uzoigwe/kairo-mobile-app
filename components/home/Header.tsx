import { TouchableOpacity, View } from "react-native";
import AppText from "../ui/AppText";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router } from "expo-router";

export default function Header() {
    return (
        <View className="flex flex-row justify-between px-3 items-center">
            <View className="flex-row gap-3 items-center">
                {/* Avatar */}
                <View className="h-12 w-12 justify-center items-center bg-[#630ED4] rounded-full">
                   <AppText size={22} weight="bold" color="white">N</AppText>
                </View>
                    <AppText weight="semibold" color="#630ED4" size={20}>Kairo</AppText>
            </View>

            {/* Notifications */}
            <View>
                <TouchableOpacity onPress={() => router.push("/notifications/index")}>
                    <FontAwesome5 name="bell" size={22} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}