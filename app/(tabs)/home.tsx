import ApplicationOverview from "@/components/home/ApplicationOverview";
import Header from "@/components/home/Header";
import RecentApplications from "@/components/home/RecentApplications";
import AppText from "@/components/ui/AppText";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView className="flex-1 mt-4 px-4 bg-[#ede9fe]">
            <ScrollView contentContainerClassName="gap-6">
                <Header />
                <ApplicationOverview />
                <RecentApplications />
            </ScrollView>
        </SafeAreaView>
    )
}