import {
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import Button from "@/components/ui/Button";
import DateInput from "@/components/ui/DateInput";

interface Props {
  visible: boolean;
  onClose: () => void;
  jobTitle?: string;
  company?: string;
}

export default function SetReminderSheet({
  visible,
  onClose,
  jobTitle = "Lead Frontend Engineer",
  company = "Linear",
}: Props) {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<Date>();
  const [notes, setNotes] = useState("");
  const [pushEnabled, setPushEnabled] = useState(true);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-end"
      >
        <TouchableOpacity
          className="flex-1 bg-black/40"
          activeOpacity={1}
          onPress={onClose}
        />

        <View className="bg-white rounded-t-3xl px-5 pt-4 pb-10 gap-5">
          {/* Handle */}
          <View className="w-10 h-1 rounded-full bg-gray-200 self-center mb-1" />

          {/* Header row */}
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="w-12 h-12 rounded-xl bg-violet-100 items-center justify-center">
                <AppText size={20}>🕐</AppText>
              </View>
              <View className="gap-0.5">
                <AppText size={18} weight="bold" className="text-black">
                  Set Reminder
                </AppText>
                <AppText size={13} className="text-gray-400">
                  {jobTitle} @ {company}
                </AppText>
              </View>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Feather name="x" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>

          {/* Date + Time row */}
          <View className="flex-row gap-3">
            <View className="flex-1">
              <AppText size={14} weight="semibold" className="text-black mb-2">
                Date
              </AppText>
              <TouchableOpacity className="flex-row items-center justify-between border border-gray-200 rounded-xl px-4 py-3.5 bg-white">
                <AppText size={14} className={date ? "text-black" : "text-gray-400"}>
                  {date
                    ? date.toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })
                    : "MM/DD/YYYY"}
                </AppText>
                <Feather name="calendar" size={16} color="#9ca3af" />
              </TouchableOpacity>
            </View>

            <View className="flex-1">
              <AppText size={14} weight="semibold" className="text-black mb-2">
                Time
              </AppText>
              <TouchableOpacity className="flex-row items-center justify-between border border-gray-200 rounded-xl px-4 py-3.5 bg-white">
                <AppText size={14} className={time ? "text-black" : "text-gray-400"}>
                  {time
                    ? time.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "02:30 PM"}
                </AppText>
                <Feather name="clock" size={16} color="#9ca3af" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Notes */}
          <View className="gap-2">
            <AppText size={14} weight="semibold" className="text-black">
              Notes
            </AppText>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              placeholder="Follow up with hiring manager regarding the technical assessment..."
              multiline
              textAlignVertical="top"
              className="border border-gray-200 rounded-xl px-4 py-3 h-24 placeholder:text-gray-300 text-black"
            />
          </View>

          {/* Push notification toggle */}
          <View className="flex-row items-center justify-between bg-violet-50 rounded-2xl px-4 py-3.5">
            <View className="flex-row items-center gap-2">
              <Feather name="bell" size={18} color="#7c3aed" />
              <AppText size={15} weight="semibold" className="text-black">
                Push Notification
              </AppText>
            </View>
            <Switch
              value={pushEnabled}
              onValueChange={setPushEnabled}
              trackColor={{ false: "#e5e7eb", true: "#7c3aed" }}
              thumbColor="#ffffff"
            />
          </View>

          {/* CTA */}
          <Button label="Set Reminder" onPress={onClose} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}