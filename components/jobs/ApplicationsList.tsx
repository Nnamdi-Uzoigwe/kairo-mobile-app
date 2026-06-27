import { View } from "react-native";
import ApplicationCard from "../ui/ApplicationCard";

const applicationsData = [
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
        company: "JetBrains",
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
    {
        id: "6",
        role: "Frontend Engineer",
        company: "Flutterwave",
        dateApplied: "June 21, 2026",
        applicationStage: "Interviewing"
    },
    {
        id: "7",
        role: "Backend Engineer",
        company: "Paystack",
        dateApplied: "June 19, 2026",
        applicationStage: "Applied"
    },
    {
        id: "8",
        role: "Product Manager",
        company: "Microsoft",
        dateApplied: "May 29, 2026",
        applicationStage: "Rejected"
    },
    {
        id: "9",
        role: "Mobile Engineer",
        company: "Spotify",
        dateApplied: "May 26, 2026",
        applicationStage: "Assessment"
    },
    {
        id: "10",
        role: "Full Stack Developer",
        company: "Google",
        dateApplied: "May 18, 2026",
        applicationStage: "Offer"
    },
];

export default function ApplicationsList() {
    return (
        <View className="mt-4 pb-24">
            <View className="mt-3 gap-4">
                            {applicationsData.map((item) => (
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