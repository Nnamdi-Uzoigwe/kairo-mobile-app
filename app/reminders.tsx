import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";

interface Reminder {
  id: string;
  role: string;
  company: string;
  datetime: string;
  tag: string;
  tagColor: string;
  tagBg: string;
  past?: boolean;
}

const REMINDERS: Reminder[] = [
  {
    id: "1",
    role: "Product Designer",
    company: "Linear",
    datetime: "Oct 24, 10:00 AM",
    tag: "Interview",
    tagColor: "#7c3aed",
    tagBg: "#ede9fe",
  },
  {
    id: "2",
    role: "Senior Frontend Engineer",
    company: "Stripe",
    datetime: "Oct 26, 09:00 AM",
    tag: "Follow-up",
    tagColor: "#d97706",
    tagBg: "#fef3c7",
  },
  {
    id: "3",
    role: "Design Systems Lead",
    company: "Vercel",
    datetime: "Oct 28, 02:30 PM",
    tag: "Portfolio Review",
    tagColor: "#6b7280",
    tagBg: "#f3f4f6",
  },
];

const PAST: Reminder[] = [
  {
    id: "4",
    role: "UI Engineer",
    company: "Airbnb",
    datetime: "Oct 15",
    tag: "",
    tagColor: "",
    tagBg: "",
    past: true,
  },
];

function ReminderRow({
  item,
  onPress,
}: {
  item: Reminder;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row items-center gap-3 bg-white rounded-2xl px-4 py-4 ${
        item.past ? "opacity-50" : ""
      }`}
    >
      {/* Logo placeholder */}
      <View className="w-12 h-12 rounded-xl bg-gray-100 items-center justify-center overflow-hidden">
        <View className="w-8 h-8 bg-gray-300 rounded-lg" />
      </View>

      <View className="flex-1 gap-0.5">
        <AppText size={15} weight="semibold" className="text-black">
          {item.role}
        </AppText>
        <AppText size={13} className="text-gray-400">
          {item.company} • {item.datetime}
        </AppText>
      </View>

      <View className="flex-row items-center gap-2">
        {item.tag ? (
          <View
            className="rounded-lg px-2.5 py-1"
            style={{ backgroundColor: item.tagBg }}
          >
            <AppText size={12} weight="semibold" style={{ color: item.tagColor }}>
              {item.tag}
            </AppText>
          </View>
        ) : (
          <Feather name="check-circle" size={18} color="#d1d5db" />
        )}
        {!item.past && (
          <Feather name="chevron-right" size={16} color="#d1d5db" />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default function Reminders() {
  const tabBarHeight = useBottomTabBarHeight();
  const [showAdd, setShowAdd] = useState(false);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#ede9fe]">
      <ScrollView
        contentContainerClassName="px-4 pt-6 gap-5"
        contentContainerStyle={{ paddingBottom: tabBarHeight + 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="gap-0.5">
            <AppText size={11} weight="bold" className="text-violet-500 uppercase tracking-widest">
              Tracking
            </AppText>
            <AppText size={26} weight="bold" className="text-black">
              Reminders
            </AppText>
          </View>

          <TouchableOpacity
            onPress={() => setShowAdd(true)}
            className="bg-violet-600 rounded-full px-4 py-2.5 flex-row items-center gap-1.5"
          >
            <Feather name="plus" size={16} color="white" />
            <AppText size={14} weight="semibold" className="text-white">
              New
            </AppText>
          </TouchableOpacity>
        </View>

        {/* Upcoming */}
        <View className="gap-3">
          <View className="flex-row items-center gap-2">
            <AppText size={17} weight="bold" className="text-black">
              Upcoming
            </AppText>
            <View className="bg-violet-600 rounded-full w-6 h-6 items-center justify-center">
              <AppText size={12} weight="bold" className="text-white">
                {REMINDERS.length}
              </AppText>
            </View>
          </View>

          {REMINDERS.map((item) => (
            <ReminderRow key={item.id} item={item} onPress={() => {}} />
          ))}
        </View>

        {/* Past */}
        <View className="gap-3">
          <AppText size={17} weight="bold" className="text-gray-400">
            Past
          </AppText>
          {PAST.map((item) => (
            <ReminderRow key={item.id} item={item} onPress={() => {}} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}