import { View } from "react-native";
import AppText from "./AppText";

interface AppStatsCardProps {
    title: string;
    stats: number;
    icon: React.ReactNode;
}

export default function AppStatsCard({ title, stats, icon }: AppStatsCardProps) {
    return (
        <View className="flex-1 border border-purple-200 bg-white gap-1 p-4 rounded-xl items-center">
            <View className={`${title === 'Applied' ? "bg-[#ede9fe]" : title === 'Interviews' ? "bg-[#ded1df]" : "bg-[#fdddc6]"} p-3 rounded-full items-center justify-center`}>
                {icon}
            </View>
            <AppText size={20} weight="semibold">{stats}</AppText>
            <AppText size={13}>{title}</AppText>
        </View>
    )
}