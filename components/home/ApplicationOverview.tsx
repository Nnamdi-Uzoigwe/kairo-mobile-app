import { View } from "react-native";
import AppText from "../ui/AppText";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AppStatsCard from "../ui/AppStatsCard";

const appOverviewData = [
    {
        id: 1,
        title: "Applied",
        stats: 42,
        icon: <FontAwesome name="send" size={20} color="#630ED4" />
    },
    {
        id: 2,
        title: "Interviews",
        stats: 8,
        icon: <Entypo name="users" size={20} color="#a095a1" />
    },
    {
        id: 3,
        title: "Pending",
        stats: 12,
        icon: <MaterialCommunityIcons name="clock-time-four" size={20} color="#bc7747" />
    }
]
export default function ApplicationOverview() {
    return (
        <View>
            {/* Greeting */}
                            <View className="flex-row items-center gap-1">
                                <AppText size={16} weight="semibold">Good Morning,</AppText>
                                <AppText weight="semibold" color="#630ED4" size={18}>Nnamdi👋</AppText>
                            </View>
            <AppText size={16}>Here's your job hunt overview</AppText>

            <View className="mt-3 flex-row w-full gap-3">
                {appOverviewData.map((item) => (
                    <AppStatsCard
                        key={item.id}
                        title={item.title}
                        stats={item.stats}
                        icon={item.icon}
                    />
                ))}
            </View>
        </View>
    )
}