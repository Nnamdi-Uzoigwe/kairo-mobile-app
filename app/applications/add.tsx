import { ScrollView, View, Platform, TextInput } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Button from "@/components/ui/Button";
import Octicons from '@expo/vector-icons/Octicons';
import AddApplicationHeader from "@/components/jobs/AddApplicationHeader";
import Dropdown from "@/components/ui/Dropdown";
import DateInput from "@/components/ui/DateInput";
import { useState } from "react";

function FieldLabel({ label }: { label: string }) {
  return (
    <AppText size={16} weight="semibold">
      {label}
    </AppText>
  );
}

export default function AddNewApplication() {
  const [stage, setStage] = useState("");
  const [source, setSource] = useState("");
  const [dateApplied, setDateApplied] = useState<Date>();

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#ede9fe]">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="flex-grow px-4 py-10 gap-6"
        >
          <AddApplicationHeader />

          <View className="w-full gap-4">
            {/* Company name */}
            <View className="gap-2">
              <FieldLabel label="Company Name" />
              <TextInput
                placeholder="e.g. Acme Corp"
                autoCapitalize="words"
                className="bg-white p-4 border border-gray-300 rounded-xl placeholder:text-[#949494]"
              />
            </View>

            {/* Role title */}
            <View className="gap-2">
              <FieldLabel label="Role Title" />
              <TextInput
                placeholder="e.g. Software Engineer"
                autoCapitalize="words"
                className="bg-white p-4 border border-gray-300 rounded-xl placeholder:text-[#949494]"
              />
            </View>

            {/* Job URL */}
            <View className="gap-2">
              <FieldLabel label="Job URL" />
              <View>
                <TextInput
                  placeholder="https://linkedin.com/jobs/..."
                  autoCapitalize="none"
                  keyboardType="url"
                  className="bg-white border border-gray-300 p-4 pl-10 rounded-xl placeholder:text-[#949494]"
                />
                <Feather
                  className="absolute top-4 left-3"
                  name="link-2"
                  size={16}
                  color="#949494"
                />
              </View>
            </View>

            {/* Status + Date Applied */}
            <View className="flex-row gap-2">
              <View className="flex-1">
                <Dropdown
                  label="Status"
                  value={stage}
                  onChange={setStage}
                  items={[
                    { label: "Applied", value: "applied" },
                    { label: "Assessment", value: "assessment" },
                    { label: "Interviewing", value: "interviewing" },
                    { label: "Offer", value: "offer" },
                    { label: "Rejected", value: "rejected" },
                  ]}
                />
              </View>
              <View className="flex-1">
                <DateInput
                  label="Date Applied"
                  value={dateApplied}
                  onChange={setDateApplied}
                />
              </View>
            </View>

            {/* Salary Range + Source */}
            <View className="flex-row gap-2">
              <View className="flex-1 gap-2">
                <FieldLabel label="Salary Range" />
                <TextInput
                  placeholder="e.g. $80k - $100k"
                  keyboardType="numeric"
                  className="bg-white p-4 border border-gray-300 rounded-xl placeholder:text-[#949494]"
                />
              </View>
              <View className="flex-1">
                <Dropdown
                  label="Source"
                  value={source}
                  onChange={setSource}
                  items={[
                    { label: "LinkedIn", value: "linkedin" },
                    { label: "Twitter/X", value: "twitter" },
                    { label: "Referral", value: "referral" },
                    { label: "Company Site", value: "company_site" },
                    { label: "Job Board", value: "job_board" },
                    { label: "Other", value: "other" },
                  ]}
                />
              </View>
            </View>

            <View>
              <TextInput
                placeholder="Add any notes..."
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                className="bg-white p-4 border border-gray-300 rounded-xl placeholder:text-[#949494] h-32"
              />
            </View>

            <View className="my-2 flex-row gap-2 rounded-xl items-center p-4 bg-purple-200">
                <View className="bg-[#630ED4] p-4 rounded-xl">
                    <Octicons name="rocket" size={24} color="white" />
                </View>
                <View className="gap-1">
                    <AppText weight="semibold" size={17}>Application Tip</AppText>
                    <AppText color="black" className="w-[60%]">Track every interaction to improve your response rate by up to 40%</AppText>
                </View>
            </View>

            <Button
              label="Save Application"
              icon={<Fontisto name="save" size={16} color="white" />}
              onPress={() => {}}
              iconPosition="left"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
