import { View } from "react-native";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";

export interface TimelineStage {
  label: string;
  description?: string;
  date?: string;
  state: "completed" | "active" | "pending";
}

interface Props {
  stages: TimelineStage[];
}

function StageIcon({ state }: { state: TimelineStage["state"] }) {
  if (state === "completed") {
    return (
      <View className="w-7 h-7 rounded-full bg-violet-600 items-center justify-center">
        <Feather name="check" size={14} color="white" />
      </View>
    );
  }
  if (state === "active") {
    return (
      <View className="w-7 h-7 rounded-full border-2 border-violet-600 items-center justify-center">
        <View className="w-3 h-3 rounded-full bg-violet-600" />
      </View>
    );
  }
  return (
    <View className="w-7 h-7 rounded-full border-2 border-gray-300 items-center justify-center" />
  );
}

export default function StatusTimeline({ stages }: Props) {
  return (
    <View className="w-full gap-3">
      <AppText size={12} weight="bold" className="text-gray-500 tracking-widest uppercase">
        Status Timeline
      </AppText>

      <View className="bg-white rounded-2xl px-4 py-2">
        {stages.map((stage, index) => (
          <View key={stage.label}>
            <View className="flex-row items-start gap-3 py-3">
              {/* Icon + connector line */}
              <View className="items-center">
                <StageIcon state={stage.state} />
                {index < stages.length - 1 && (
                  <View className="w-0.5 h-6 bg-gray-200 mt-1" />
                )}
              </View>

              {/* Content */}
              <View className="flex-1 gap-0.5">
                <View className="flex-row justify-between items-center">
                  <AppText
                    size={15}
                    weight="semibold"
                    className={
                      stage.state === "active"
                        ? "text-violet-600"
                        : stage.state === "pending"
                        ? "text-gray-400"
                        : "text-black"
                    }
                  >
                    {stage.label}
                  </AppText>
                  <AppText size={13} className="text-gray-400">
                    {stage.date ?? "TBD"}
                  </AppText>
                </View>
                {stage.description && (
                  <AppText size={13} className="text-gray-400">
                    {stage.description}
                  </AppText>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}