import { View } from "react-native";
import AppText from "@/components/ui/AppText";

interface Props {
  rate: number;
  changePercent: number;
}

export default function GlobalResponseRate({ rate, changePercent }: Props) {
  return (
    <View className="bg-white rounded-2xl p-6 items-center gap-3 w-full">
      <AppText size={12} weight="semibold" className="text-gray-500 uppercase tracking-widest">
        Global Response Rate
      </AppText>
      <AppText size={52} weight="bold" className="text-violet-600">
        {rate}%
      </AppText>
      <View className="bg-amber-50 rounded-full px-4 py-1.5 flex-row items-center gap-1">
        <AppText size={13} className="text-amber-600">
          🔺 +{changePercent}% from last month
        </AppText>
      </View>
    </View>
  );
}