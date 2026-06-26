import { TouchableOpacity, View } from "react-native";
import AppText from "../ui/AppText";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Header() {
    return (
        <View className="flex flex-row justify-between items-center">
            <View className="flex-row gap-3 items-center">
                {/* Avatar */}
                <View className="h-12 w-12 justify-center items-center bg-[#630ED4] rounded-full">
                   <AppText size={22} weight="bold" color="white">N</AppText>
                </View>

                {/* Greeting */}
                <View>
                    <AppText size={16} weight="semibold">Good Morning,</AppText>
                    <AppText weight="semibold" color="#630ED4" size={20}>Nnamdi👋</AppText>
                </View>
            </View>

            {/* Notifications */}
            <View>
                <TouchableOpacity>
                    <FontAwesome5 name="bell" size={22} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}