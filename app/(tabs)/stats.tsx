import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import GlobalResponseRate from "@/components/stats/GlobalResponseRate";
import QuickStats from "@/components/stats/QuickStats";
import MonthlyApplicationsChart from "@/components/stats/MonthlyApplicationsChart";
import ApplicationsBySource from "@/components/stats/ApplicationsBySource";

const monthlyData = [
  { month: "Jan", count: 4 },
  { month: "Feb", count: 7 },
  { month: "Mar", count: 5 },
  { month: "Apr", count: 10 },
  { month: "May", count: 8 },
  { month: "Jun", count: 14 },
];

const sources = [
  { label: "LinkedIn", percent: 50, color: "#7c3aed" },
  { label: "Direct Apply", percent: 30, color: "#a78bfa" },
  { label: "Referrals", percent: 20, color: "#ede9fe" },
];

export default function Stats() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#ede9fe]">
      <ScrollView
        contentContainerClassName="px-4 pt-6 gap-4"
        contentContainerStyle={{ paddingBottom: tabBarHeight + 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top bar */}
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center gap-2">
            <View className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden" />
            <AppText size={18} weight="bold" className="text-violet-600">
              Kairo
            </AppText>
          </View>
          <TouchableOpacity>
            <Feather name="bell" size={22} color="#1f2937" />
          </TouchableOpacity>
        </View>

        {/* Page title */}
        <View className="gap-1 mb-2">
          <AppText size={26} weight="bold" className="text-black">
            Your Progress
          </AppText>
          <AppText size={14} className="text-gray-500">
            Real-time performance analytics for your job search.
          </AppText>
        </View>

        <GlobalResponseRate rate={64.2} changePercent={12.4} />

        <QuickStats avgDays={4.2} totalOffers={3} />

        <MonthlyApplicationsChart data={monthlyData} />

        <ApplicationsBySource total={158} sources={sources} />
      </ScrollView>
    </SafeAreaView>
  );
}