import { View, TouchableOpacity } from "react-native";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import Svg, { Rect, G } from "react-native-svg";

interface MonthData {
  month: string;
  count: number;
}

interface Props {
  data: MonthData[];
}

const CHART_HEIGHT = 120;
const BAR_WIDTH = 28;
const BAR_RADIUS = 8;

export default function MonthlyApplicationsChart({ data }: Props) {
  const max = Math.max(...data.map((d) => d.count), 1);

  return (
    <View className="bg-white rounded-2xl p-5 w-full gap-4">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <AppText size={16} weight="bold" className="text-black">
          Monthly Applications
        </AppText>
        <TouchableOpacity>
          <AppText size={20} className="text-gray-400 tracking-widest">···</AppText>
        </TouchableOpacity>
      </View>

      {/* Chart */}
      <View style={{ height: CHART_HEIGHT + 24 }}>
        <Svg width="100%" height={CHART_HEIGHT}>
          <G>
            {data.map((item, index) => {
              const barHeight = Math.max((item.count / max) * CHART_HEIGHT, 8);
              const x = index * ((100 / data.length) + 2);
              return (
                <Rect
                  key={item.month}
                  x={`${index * (100 / data.length) + 1}%`}
                  y={CHART_HEIGHT - barHeight}
                  width={BAR_WIDTH}
                  height={barHeight}
                  rx={BAR_RADIUS}
                  fill={index === data.length - 1 ? "#7c3aed" : "#ede9fe"}
                />
              );
            })}
          </G>
        </Svg>

        {/* X axis labels */}
        <View className="flex-row justify-around mt-2">
          {data.map((item) => (
            <AppText key={item.month} size={12} className="text-gray-400 text-center">
              {item.month}
            </AppText>
          ))}
        </View>
      </View>
    </View>
  );
}