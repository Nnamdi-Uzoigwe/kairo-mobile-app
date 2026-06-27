import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
interface ApplicationCardProps {
    role: string;
    company: string;
    date: string;
    stage: string;

}
export default function ApplicationCard({ role, company, date, stage }: ApplicationCardProps) {
    return (
        <View className="bg-white border border-purple-200 px-4 py-6 rounded-xl flex-row justify-between">
            <View>
                <AppText size={17} weight="semibold">{role}</AppText>
                <AppText color="#949494">{company}</AppText>
            </View>

            <View>
                <TouchableOpacity onPress={() => router.push("/applications/[id]")} className="flex-row items-center gap-1">
                    <View className="items-center gap-1">
                        <View className={`${ stage === 'Interviewing' ? "bg-purple-200" : stage === 'Applied' ? "bg-gray-200" : stage === 'Offer' ? "bg-green-200" : "bg-red-200"} p-2 items-center justify-center rounded-full`}>
                        <AppText weight="semibold" color={stage === 'Interviewing' ? "#a855f7" : stage === 'Applied' ? "#6b7280" : stage === 'Offer' ? "#22c55e" : "#ef4444"}>{stage}</AppText>
                        </View>
                        <AppText color="#949494" size={12}>{date.split(" ").slice(0, 2).join(" ").replace(",", "")}</AppText>
                    </View>

                <View>
                    <MaterialIcons name="arrow-forward-ios" size={18} color="#949494" />
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}