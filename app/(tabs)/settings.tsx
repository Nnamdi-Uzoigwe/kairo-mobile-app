import { View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { router } from "expo-router";

// ─── Profile Header ───────────────────────────────────────────────────────────

function ProfileHeader() {
  return (
    <View className="items-center gap-2 py-6">
      {/* Avatar */}
      <View className="relative">
        <View className="w-24 h-24 rounded-full bg-violet-600 items-center justify-center overflow-hidden">
          <View className="w-full h-full bg-violet-700" />
        </View>
        <TouchableOpacity className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-violet-600 items-center justify-center border-2 border-white">
          <Feather name="camera" size={14} color="white" />
        </TouchableOpacity>
      </View>

      <View className="items-center gap-0.5">
        <AppText size={20} weight="bold" className="text-black">
          Alex Rivera
        </AppText>
        <AppText size={14} className="text-gray-500">
          alex.rivera@kairo.io
        </AppText>
      </View>

      <TouchableOpacity className="bg-violet-100 rounded-2xl px-16 py-3 mt-1">
        <AppText size={15} weight="semibold" className="text-violet-400">
          Edit Profile
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

// ─── Settings Row ─────────────────────────────────────────────────────────────

interface SettingsRowProps {
  icon: React.ComponentProps<typeof Feather>["name"];
  iconBg: string;
  iconColor: string;
  label: string;
  sublabel: string;
  labelColor?: string;
  rightLabel?: string;
  onPress?: () => void;
  showDivider?: boolean;
}

function SettingsRow({
  icon,
  iconBg,
  iconColor,
  label,
  sublabel,
  labelColor = "text-black",
  rightLabel,
  onPress,
  showDivider = true,
}: SettingsRowProps) {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        className="flex-row items-center gap-4 px-4 py-4"
      >
        <View
          className="w-10 h-10 rounded-xl items-center justify-center"
          style={{ backgroundColor: iconBg }}
        >
          <Feather name={icon} size={18} color={iconColor} />
        </View>

        <View className="flex-1 gap-0.5">
          <AppText size={15} weight="semibold" className={labelColor}>
            {label}
          </AppText>
          <AppText size={13} className="text-gray-400">
            {sublabel}
          </AppText>
        </View>

        {rightLabel ? (
          <View className="flex-row items-center gap-1">
            <AppText size={13} weight="semibold" className="text-violet-600">
              {rightLabel}
            </AppText>
            <Feather name="chevron-right" size={16} color="#7c3aed" />
          </View>
        ) : (
          <Feather name="chevron-right" size={16} color="#d1d5db" />
        )}
      </TouchableOpacity>

      {showDivider && (
        <View className="h-px bg-gray-100 mx-4" />
      )}
    </>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="gap-2">
      <AppText size={12} weight="bold" className="text-gray-400 uppercase tracking-widest px-1">
        {title}
      </AppText>
      <View className="bg-white rounded-2xl overflow-hidden">
        {children}
      </View>
    </View>
  );
}

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function Settings() {
  const tabBarHeight = useBottomTabBarHeight();

  const handleLogOut = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Log Out", style: "destructive", onPress: () => {} },
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This will permanently remove all your data. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => {} },
      ]
    );
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#ede9fe]">
      <ScrollView
        contentContainerClassName="px-4 gap-6 pb-6"
        contentContainerStyle={{ paddingBottom: tabBarHeight + 16 }}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader />

        <Section title="Preferences">
          <SettingsRow
            icon="bell"
            iconBg="#ede9fe"
            iconColor="#7c3aed"
            label="Notifications"
            sublabel="Manage alerts and sounds"
            onPress={() => router.push("/notifications/preferences")}
          />
          <SettingsRow
            icon="database"
            iconBg="#fef3c7"
            iconColor="#d97706"
            label="Default Source"
            sublabel="Manage data connections"
            rightLabel="CloudSync"
            onPress={() => {}}
            showDivider={false}
          />
        </Section>

        <Section title="Account Security">
          <SettingsRow
            icon="lock"
            iconBg="#ede9fe"
            iconColor="#7c3aed"
            label="Change Password"
            sublabel="Last changed 3 months ago"
            onPress={() => {}}
          />
          <SettingsRow
            icon="log-out"
            iconBg="#fee2e2"
            iconColor="#dc2626"
            label="Log Out"
            sublabel="Exit your current session"
            labelColor="text-red-600"
            onPress={handleLogOut}
          />
          <SettingsRow
            icon="x-square"
            iconBg="#fee2e2"
            iconColor="#dc2626"
            label="Delete Account"
            sublabel="Permanently remove all data"
            labelColor="text-red-600"
            onPress={handleDeleteAccount}
            showDivider={false}
          />
        </Section>

        <AppText size={13} className="text-gray-400 text-center">
          Kairo v2.4.1 (Stable)
        </AppText>
      </ScrollView>
    </SafeAreaView>
  );
}