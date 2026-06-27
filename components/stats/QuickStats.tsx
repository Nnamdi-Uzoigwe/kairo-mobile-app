import { View } from "react-native";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";

interface StatCardProps {
  icon: React.ComponentProps<typeof Feather>["name"];
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <View className="flex-1 bg-white rounded-2xl p-4 gap-3">
      <View className="w-10 h-10 rounded-xl bg-violet-100 items-center justify-center">
        <Feather name={icon} size={18} color="#7c3aed" />
      </View>
      <View className="gap-0.5">
        <AppText size={20} weight="bold" className="text-black">
          {value}
        </AppText>
        <AppText size={13} className="text-gray-500">
          {label}
        </AppText>
      </View>
    </View>
  );
}

interface Props {
  avgDays: number;
  totalOffers: number;
}

export default function QuickStats({ avgDays, totalOffers }: Props) {
  return (
    <View className="flex-row gap-3 w-full">
      <StatCard icon="clock" value={`${avgDays} Days`} label="Avg hearing back" />
      <StatCard icon="award" value={`${totalOffers} Offers`} label="Total career offers" />
    </View>
  );
}