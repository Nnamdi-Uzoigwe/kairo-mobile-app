import { View, ScrollView, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { useState } from "react";
import Button from "@/components/ui/Button";

interface NotifToggle {
  id: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  label: string;
  description: string;
  enabled: boolean;
}

type DeliveryChannel = "Push" | "Email" | "SMS";

export default function NotificationPreferences() {
  const [toggles, setToggles] = useState<NotifToggle[]>([
    {
      id: "followup",
      icon: "calendar",
      label: "Follow-up Reminders",
      description:
        "Get notified when it's time to send a follow-up email after an application or interview.",
      enabled: true,
    },
    {
      id: "interview",
      icon: "monitor",
      label: "Interview Alerts",
      description:
        "Immediate notifications for new interview invitations, schedule changes, or meeting links.",
      enabled: true,
    },
    {
      id: "weekly",
      icon: "bar-chart-2",
      label: "Weekly Summary",
      description:
        "A consolidated report of your application activity, stats, and upcoming deadlines every Monday.",
      enabled: false,
    },
    {
      id: "updates",
      icon: "download",
      label: "App Updates",
      description:
        "Stay informed about new features, performance improvements, and tips for your job search.",
      enabled: true,
    },
  ]);

  const [channel, setChannel] = useState<DeliveryChannel>("Push");

  const toggle = (id: string) => {
    setToggles((prev) =>
      prev.map((t) => (t.id === id ? { ...t, enabled: !t.enabled } : t))
    );
  };

  const channels: DeliveryChannel[] = ["Push", "Email", "SMS"];

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
        <View className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-4 gap-4 pb-10"
      >
        {/* Subtitle */}
        <AppText size={14} className="text-gray-500 leading-5">
          Manage how and when you receive updates about your job applications and career growth.
        </AppText>

        {/* Notification Center hero card */}
        <View className="bg-white rounded-2xl p-5 flex-row items-start justify-between overflow-hidden">
          <View className="gap-1 flex-1 pr-4">
            <AppText size={15} weight="bold" className="text-violet-600">
              Notification Center
            </AppText>
            <AppText size={13} className="text-gray-500 leading-5">
              Control your alerts to stay focused on what matters most.
            </AppText>
          </View>
          <Feather name="bell" size={48} color="#ede9fe" />
        </View>

        {/* Toggle cards */}
        {toggles.map((item) => (
          <View key={item.id} className="bg-white rounded-2xl p-4 gap-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <Feather name={item.icon} size={18} color="#7c3aed" />
                <AppText size={15} weight="semibold" className="text-black">
                  {item.label}
                </AppText>
              </View>
              <Switch
                value={item.enabled}
                onValueChange={() => toggle(item.id)}
                trackColor={{ false: "#e5e7eb", true: "#7c3aed" }}
                thumbColor="#ffffff"
              />
            </View>
            <AppText size={13} className="text-gray-500 leading-5">
              {item.description}
            </AppText>
          </View>
        ))}

        {/* Delivery Channels */}
        <View className="gap-3">
          <AppText size={15} weight="bold" className="text-black">
            Delivery Channels
          </AppText>

          <View className="bg-white rounded-2xl p-1.5 flex-row">
            {channels.map((ch) => (
              <TouchableOpacity
                key={ch}
                onPress={() => setChannel(ch)}
                className={`flex-1 py-2.5 rounded-xl items-center ${
                  channel === ch ? "bg-white shadow" : ""
                }`}
                style={
                  channel === ch
                    ? { shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 4, elevation: 2 }
                    : {}
                }
              >
                <AppText
                  size={14}
                  weight={channel === ch ? "semibold" : "regular"}
                  className={channel === ch ? "text-violet-600" : "text-gray-400"}
                >
                  {ch}
                </AppText>
              </TouchableOpacity>
            ))}
          </View>

          <AppText size={13} className="text-gray-400 text-center">
            Email notifications are sent to{" "}
            <AppText size={13} weight="semibold" className="text-violet-600">
              alex.dev@example.com
            </AppText>
          </AppText>
        </View>

        {/* Save button */}
        <Button
          label="Save Preferences"
          onPress={() => router.back()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}