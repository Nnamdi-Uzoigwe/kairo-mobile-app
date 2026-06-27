import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";

export interface InterviewRound {
  id: string;
  title: string;
  status: "completed" | "scheduled" | "pending";
  date?: string;
  notes?: string;
  icon: "user" | "code" | "users";
}

interface Props {
  rounds: InterviewRound[];
}

function RoundIcon({ icon }: { icon: InterviewRound["icon"] }) {
  const name =
    icon === "user" ? "user" : icon === "code" ? "code" : "users";
  return (
    <View className="w-10 h-10 rounded-xl bg-violet-100 items-center justify-center">
      <Feather name={name} size={18} color="#7c3aed" />
    </View>
  );
}

function statusColor(status: InterviewRound["status"]) {
  if (status === "completed") return "text-violet-600";
  if (status === "scheduled") return "text-amber-500";
  return "text-gray-400";
}

function statusLabel(status: InterviewRound["status"], date?: string) {
  if (status === "completed") return `Completed${date ? ` • ${date}` : ""}`;
  if (status === "scheduled") return `Scheduled${date ? ` • ${date}` : ""}`;
  return "Not yet scheduled";
}

export default function InterviewRounds({ rounds }: Props) {
  const [expanded, setExpanded] = useState<string | null>(rounds[0]?.id ?? null);

  return (
    <View className="w-full gap-3">
      <AppText size={12} weight="bold" className="text-gray-500 tracking-widest uppercase">
        Interview Rounds
      </AppText>

      <View className="gap-3">
        {rounds.map((round) => {
          const isOpen = expanded === round.id;
          return (
            <View key={round.id} className="bg-white rounded-2xl overflow-hidden">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setExpanded(isOpen ? null : round.id)}
                className="flex-row items-center gap-3 px-4 py-4"
              >
                <RoundIcon icon={round.icon} />
                <View className="flex-1 gap-0.5">
                  <AppText size={15} weight="semibold" className="text-black">
                    {round.title}
                  </AppText>
                  <AppText size={13} className={statusColor(round.status)}>
                    {statusLabel(round.status, round.date)}
                  </AppText>
                </View>
                <Feather
                  name={isOpen ? "chevron-up" : "chevron-down"}
                  size={18}
                  color="#9ca3af"
                />
              </TouchableOpacity>

              {isOpen && round.notes && (
                <View className="mx-4 mb-4 bg-[#f3f0ff] rounded-xl p-4 gap-1">
                  <AppText size={11} weight="bold" className="text-gray-400 uppercase tracking-widest">
                    Quick Notes
                  </AppText>
                  <AppText size={14} className="text-gray-700 leading-5">
                    {round.notes}
                  </AppText>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}