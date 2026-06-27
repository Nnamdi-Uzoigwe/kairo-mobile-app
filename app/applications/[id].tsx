import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApplicationDetailHeader from "@/components/jobs/ApplicationDetailHeader";
import StatusTimeline, { TimelineStage } from "@/components/jobs/StatusTimeline";
import InterviewRounds, { InterviewRound } from "@/components/jobs/InterviewRounds";
import FollowUpReminder from "@/components/jobs/FollowUpReminder";
// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const stages: TimelineStage[] = [
  {
    label: "Applied",
    description: "Application submitted via LinkedIn",
    date: "Oct 12, 2023",
    state: "completed",
  },
  {
    label: "Recruiter Screen",
    description: "30 min call with Sarah Jenkins",
    date: "Oct 18, 2023",
    state: "completed",
  },
  {
    label: "Interviewing",
    description: "Currently in Round 2 of 3",
    date: "Ongoing",
    state: "active",
  },
  {
    label: "Offer / Decision",
    state: "pending",
  },
];

const rounds: InterviewRound[] = [
  {
    id: "r1",
    title: "Round 1: Portfolio Review",
    status: "completed",
    date: "Oct 22",
    icon: "user",
    notes:
      "Focused on the Fintech case study. Asked about design systems and hand-off processes. Felt very positive. Sarah mentioned they like my systems approach.",
  },
  {
    id: "r2",
    title: "Round 2: Technical Design",
    status: "scheduled",
    date: "Oct 29, 2:00 PM",
    icon: "code",
  },
  {
    id: "r3",
    title: "Round 3: Culture & Leadership",
    status: "pending",
    icon: "users",
  },
];

export default function ApplicationDetail() {
//   const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#ede9fe]">
      <ScrollView
        contentContainerClassName="px-4 py-6 gap-6"
        showsVerticalScrollIndicator={false}
      >
        <ApplicationDetailHeader
          role="Senior Product Designer"
          company="Linear"
          location="San Francisco, CA"
          status="Interview Phase"
        />

        <StatusTimeline stages={stages} />

        <InterviewRounds rounds={rounds} />

        <FollowUpReminder
          reminderDate="10/30/2023"
          onDatePress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}