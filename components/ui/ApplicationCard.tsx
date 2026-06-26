import { View } from "react-native";
import AppText from "./AppText";
interface ApplicationCardProps {
    role: string;
    company: string;
    date: string;
    stage: string;

}
export default function ApplicationCard({ role, company, date, stage }: ApplicationCardProps) {
    return (
        <View className="bg-white border border-purple-200 p-4 rounded-xl">
            <View>
                <AppText>{role}</AppText>
                <AppText>{company}</AppText>
            </View>

            <View>
                <AppText>{stage}</AppText>
                <AppText>{date}</AppText>
            </View>
        </View>
    )
}