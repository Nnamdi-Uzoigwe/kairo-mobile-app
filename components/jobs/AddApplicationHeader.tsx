import { TouchableOpacity, View } from "react-native";
import AppText from "../ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

export default function AddApplicationHeader() {
  return (
    <View className="flex-row items-center justify-start w-full gap-10">
      <TouchableOpacity onPress={() => router.back()} className="flex-row items-center gap-1">
        <Feather name="arrow-left" size={20} color="black" />
        <AppText color="black">Back</AppText>
      </TouchableOpacity>
      <AppText color="#630ED4" weight="semibold" size={22}>
        Add New Application
      </AppText>
    </View>
  );
}
