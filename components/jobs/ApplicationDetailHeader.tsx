import { View, Image } from "react-native";
import AppText from "@/components/ui/AppText";

interface Props {
  role: string;
  company: string;
  location: string;
  status: string;
  logoUrl?: string;
}

export default function ApplicationDetailHeader({
  role,
  company,
  location,
  status,
  logoUrl,
}: Props) {
  return (
    <View className="bg-white rounded-2xl p-6 items-center gap-3 w-full">
      {/* Logo */}
      <View className="bg-[#ede9fe] rounded-2xl w-20 h-20 items-center justify-center overflow-hidden">
        {logoUrl ? (
          <Image source={{ uri: logoUrl }} className="w-full h-full" resizeMode="contain" />
        ) : (
          <View className="w-12 h-12 bg-gray-300 rounded-xl" />
        )}
      </View>

      {/* Role */}
      <AppText size={20} weight="bold" className="text-center text-black">
        {role}
      </AppText>

      {/* Company + Location */}
      <AppText size={14} className="text-gray-500 text-center">
        {company} • {location}
      </AppText>

      {/* Status badge */}
      <View className="bg-violet-100 rounded-full px-4 py-1.5 flex-row items-center gap-2">
        <View className="w-2 h-2 rounded-full bg-violet-600" />
        <AppText size={13} weight="semibold" className="text-violet-600">
          {status}
        </AppText>
      </View>
    </View>
  );
}