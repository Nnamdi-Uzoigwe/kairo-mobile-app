import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

interface NotificationItem {
  id: string;
  type: "followup" | "interview" | "update" | "status";
  title: string;
  body: string;
  time: string;
  read: boolean;
}

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    type: "interview",
    title: "Interview Scheduled",
    body: "Linear has scheduled a technical interview for Oct 29 at 2:00 PM.",
    time: "2h ago",
    read: false,
  },
  {
    id: "2",
    type: "followup",
    title: "Follow-up Reminder",
    body: "Time to send a thank-you note to your Moniepoint recruiter.",
    time: "5h ago",
    read: false,
  },
  {
    id: "3",
    type: "status",
    title: "Application Viewed",
    body: "Your application at Novtryx was viewed by the hiring team.",
    time: "Yesterday",
    read: true,
  },
  {
    id: "4",
    type: "update",
    title: "Weekly Summary Ready",
    body: "You applied to 8 jobs this week. Your response rate is up 12%.",
    time: "2 days ago",
    read: true,
  },
  {
    id: "5",
    type: "followup",
    title: "Follow-up Reminder",
    body: "It's been 7 days since you applied to Praxis Media. Consider following up.",
    time: "3 days ago",
    read: true,
  },
  {
    id: "6",
    type: "status",
    title: "Status Update",
    body: "Your JetBrains application has moved to the review stage.",
    time: "4 days ago",
    read: true,
  },
];

const TYPE_CONFIG = {
  followup: { icon: "clock" as const, bg: "#fef3c7", color: "#d97706" },
  interview: { icon: "calendar" as const, bg: "#ede9fe", color: "#7c3aed" },
  update: { icon: "bar-chart-2" as const, bg: "#dcfce7", color: "#16a34a" },
  status: { icon: "briefcase" as const, bg: "#ede9fe", color: "#7c3aed" },
};

function NotificationRow({ item }: { item: NotificationItem }) {
  const config = TYPE_CONFIG[item.type];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`flex-row gap-3 px-4 py-4 ${!item.read ? "bg-violet-50" : "bg-white"}`}
    >
      <View
        className="w-10 h-10 rounded-xl items-center justify-center mt-0.5 shrink-0"
        style={{ backgroundColor: config.bg }}
      >
        <Feather name={config.icon} size={18} color={config.color} />
      </View>

      <View className="flex-1 gap-1">
        <View className="flex-row items-center justify-between">
          <AppText size={14} weight="semibold" className="text-black">
            {item.title}
          </AppText>
          <View className="flex-row items-center gap-1.5">
            <AppText size={12} className="text-gray-400">{item.time}</AppText>
            {!item.read && (
              <View className="w-2 h-2 rounded-full bg-violet-600" />
            )}
          </View>
        </View>
        <AppText size={13} className="text-gray-500 leading-5">
          {item.body}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const unread = NOTIFICATIONS.filter((n) => !n.read);
const read = NOTIFICATIONS.filter((n) => n.read);

export default function Notifications() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#ede9fe]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} color="#1f2937" />
        </TouchableOpacity>
        <AppText size={18} weight="bold" className="text-violet-600">
          Notifications
        </AppText>
        <TouchableOpacity onPress={() => router.push("/notifications/preferences")}>
          <Feather name="settings" size={20} color="#1f2937" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mx-4 rounded-2xl overflow-hidden">
          {/* Unread */}
          {unread.length > 0 && (
            <View>
              <View className="bg-[#ede9fe] px-4 py-2">
                <AppText size={12} weight="bold" className="text-gray-400 uppercase tracking-widest">
                  New
                </AppText>
              </View>
              {unread.map((item, i) => (
                <View key={item.id}>
                  <NotificationRow item={item} />
                  {i < unread.length - 1 && <View className="h-px bg-gray-100 mx-4" />}
                </View>
              ))}
            </View>
          )}

          {/* Read */}
          {read.length > 0 && (
            <View>
              <View className="bg-[#ede9fe] px-4 py-2 mt-2">
                <AppText size={12} weight="bold" className="text-gray-400 uppercase tracking-widest">
                  Earlier
                </AppText>
              </View>
              {read.map((item, i) => (
                <View key={item.id}>
                  <NotificationRow item={item} />
                  {i < read.length - 1 && <View className="h-px bg-gray-100 mx-4" />}
                </View>
              ))}
            </View>
          )}
        </View>

        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}