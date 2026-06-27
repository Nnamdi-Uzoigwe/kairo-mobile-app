import { View, Switch, TouchableOpacity } from "react-native";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

interface Props {
  reminderDate?: string;
  onDatePress?: () => void;
}

export default function FollowUpReminder({ reminderDate, onDatePress }: Props) {
  const [enabled, setEnabled] = useState(true);

  return (
    <View className="w-full bg-violet-600 rounded-2xl p-5 gap-4">
      {/* Header row */}
      <View className="flex-row items-center justify-between">
        <AppText size={18} weight="bold" color="white">
          Follow-up Reminder
        </AppText>
        <Switch
          value={enabled}
          onValueChange={setEnabled}
          trackColor={{ false: "#7c3aed", true: "#ffffff" }}
          thumbColor={enabled ? "#7c3aed" : "#c4b5fd"}
        />
      </View>

      {/* Description */}
      <AppText color="#ddd6fe" size={14} className="leading-5">
        Get notified to send a thank-you note or check-in after your interview.
      </AppText>

      {/* Date picker row */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onDatePress}
        className="flex-row items-center justify-between border border-violet-400 rounded-xl px-4 py-3"
      >
        <View className="flex-row items-center gap-3">
          <Feather name="calendar" size={16} color="#c4b5fd" />
          <View className="gap-0.5">
            <AppText size={10} weight="semibold" color="#c4b5fd" className="uppercase tracking-widest">
              Reminder Date
            </AppText>
            <AppText size={15} weight="semibold" color="white">
              {reminderDate ?? "Set a date"}
            </AppText>
          </View>
        </View>
        <Feather name="chevron-down" size={16} color="#c4b5fd" />
      </TouchableOpacity>
    </View>
  );
}