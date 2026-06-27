import Header from "@/components/home/Header";
import ApplicationsList from "@/components/jobs/ApplicationsList";
import SearchBar from "@/components/jobs/SearchBar";
import AppText from "@/components/ui/AppText";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Jobs() {
    return (
        <SafeAreaView edges={["top"]} className="flex-1 mt-4 px-4 bg-[#ede9fe]">
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <SearchBar />
                <ApplicationsList />
            </ScrollView>
        </SafeAreaView>
    )
}