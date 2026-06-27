import { FlatList, TouchableOpacity, View } from "react-native";
import AppText from "../ui/AppText";
import ApplicationCard from "../ui/ApplicationCard";

const recentApplicationsData = [
    {
        id: "1",
        role: "Senior Software Engineer",
        company: "Moniepoint",
        dateApplied: "June 17, 2026",
        applicationStage: "Interviewing"
    },
    {
        id: "2",
        role: "Software Engineer",
        company: "Novtryx",
        dateApplied: "June 13, 2026",
        applicationStage: "Applied"
    },
    {
        id: "3",
        role: "Program Manager",
        company: "Praxis Media",
        dateApplied: "June 7, 2026",
        applicationStage: "Applied"
    },
    {
        id: "4",
        role: "Software Developer Advocate",
        company: "Jetbrains",
        dateApplied: "June 3, 2026",
        applicationStage: "Offer"
    },
    {
        id: "5",
        role: "IT Consultant",
        company: "ERM Corporation",
        dateApplied: "May 23, 2026",
        applicationStage: "Rejected"
    },
]
export default function RecentApplications() {
    return (
        <View>
            <View className="flex-row justify-between items-center">
                <AppText size={18} weight="semibold">Recent Applications</AppText>
                <TouchableOpacity>
                    <AppText color="#630ED4" weight="semibold">View All</AppText>
                </TouchableOpacity>
            </View>

            <View className="mt-3 gap-4">
                {recentApplicationsData.map((item) => (
                    <ApplicationCard 
                    key={item.id}
                    role={item.role}
                    date={item.dateApplied}
                    stage={item.applicationStage}
                    company={item.company}
                    />
                ))}
            </View>
              
            
        </View>
    )
}