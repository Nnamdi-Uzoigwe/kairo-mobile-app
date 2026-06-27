import { View } from "react-native";
import AppText from "@/components/ui/AppText";
import Svg, { Circle, G } from "react-native-svg";

export interface SourceItem {
  label: string;
  percent: number;
  color: string;
}

interface Props {
  total: number;
  sources: SourceItem[];
}

const SIZE = 160;
const STROKE = 28;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ApplicationsBySource({ total, sources }: Props) {
  // Build stroke-dasharray segments
  let offset = 0;
  const segments = sources.map((source) => {
    const dash = (source.percent / 100) * CIRCUMFERENCE;
    const gap = CIRCUMFERENCE - dash;
    const rotation = (offset / 100) * 360 - 90;
    offset += source.percent;
    return { ...source, dash, gap, rotation };
  });

  return (
    <View className="bg-white rounded-2xl p-5 w-full gap-5">
      <AppText size={16} weight="bold" className="text-black">
        Applications by Source
      </AppText>

      {/* Donut */}
      <View className="items-center justify-center" style={{ height: SIZE }}>
        <Svg width={SIZE} height={SIZE}>
          {/* Background ring */}
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#f3f0ff"
            strokeWidth={STROKE}
            fill="none"
          />
          {segments.map((seg, i) => (
            <G key={i} rotation={seg.rotation} origin={`${SIZE / 2}, ${SIZE / 2}`}>
              <Circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={RADIUS}
                stroke={seg.color}
                strokeWidth={STROKE}
                fill="none"
                strokeDasharray={`${seg.dash} ${seg.gap}`}
                strokeLinecap="butt"
              />
            </G>
          ))}
        </Svg>

        {/* Center label */}
        <View className="absolute items-center">
          <AppText size={28} weight="bold" className="text-black">
            {total}
          </AppText>
          <AppText size={13} className="text-gray-400">
            Total
          </AppText>
        </View>
      </View>

      {/* Legend */}
      <View className="gap-3">
        {sources.map((source) => (
          <View key={source.label} className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <View
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: source.color }}
              />
              <AppText size={14} className="text-gray-700">
                {source.label}
              </AppText>
            </View>
            <AppText size={14} weight="bold" className="text-black">
              {source.percent}%
            </AppText>
          </View>
        ))}
      </View>
    </View>
  );
}