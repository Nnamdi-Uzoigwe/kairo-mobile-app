import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";

export default function EditApplication() {
  const [jobTitle, setJobTitle] = useState("Senior Product Designer");
  const [company, setCompany] = useState("Stripe");
  const [status, setStatus] = useState("interviewing");
  const [salaryRange, setSalaryRange] = useState("$180k - $220k");
  const [appliedDate, setAppliedDate] = useState("10/12/2023");
  const [notes, setNotes] = useState(
    "Spoke with Sarah (HM) on Wednesday. They are looking for someone with strong systems thinking and Fintech experience. Next round is a portfolio deep dive scheduled for next Tuesday."
  );

  const handleDelete = () => {
    Alert.alert(
      "Delete Application",
      "Deleting this application will permanently remove all associated data and interview history.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => router.back(),
        },
      ]
    );
  };

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-[#ede9fe]">
      {/* Header */}
      <View className="flex-row items-center justify-center px-4 py-4 relative">
        <TouchableOpacity className="absolute left-4" onPress={() => router.back()}>
          <Feather name="arrow-left" size={22} color="#1f2937" />
        </TouchableOpacity>
        <AppText size={17} weight="bold" className="text-black">
          Edit Application
        </AppText>
      </View>

      <ScrollView
        contentContainerClassName="px-4 pb-12 gap-5"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Job card */}
        <View className="bg-white rounded-2xl px-4 py-4 flex-row items-center gap-3">
          <View className="w-12 h-12 rounded-xl bg-gray-900 items-center justify-center">
            <View className="w-6 h-6 bg-white rounded-md opacity-80" />
          </View>
          <View className="gap-0.5">
            <AppText size={16} weight="bold" className="text-black">
              {jobTitle || "Job Title"}
            </AppText>
            <AppText size={13} className="text-gray-400">
              {company || "Company"} • San Francisco, CA
            </AppText>
          </View>
        </View>

        {/* Form */}
        <View className="gap-4">
          {/* Job Title */}
          <View className="gap-1.5">
            <AppText size={14} weight="semibold" className="text-black">
              Job Title
            </AppText>
            <TextInput
              value={jobTitle}
              onChangeText={setJobTitle}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-400"
            />
          </View>

          {/* Company */}
          <View className="gap-1.5">
            <AppText size={14} weight="semibold" className="text-black">
              Company
            </AppText>
            <TextInput
              value={company}
              onChangeText={setCompany}
              className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-400"
            />
          </View>

          {/* Application Status */}
          <Dropdown
            label="Application Status"
            value={status}
            onChange={setStatus}
            items={[
              { label: "Applied", value: "applied" },
              { label: "Assessment", value: "assessment" },
              { label: "Interviewing", value: "interviewing" },
              { label: "Offer", value: "offer" },
              { label: "Rejected", value: "rejected" },
            ]}
          />

          {/* Salary + Date row */}
          <View className="flex-row gap-3">
            <View className="flex-1 gap-1.5">
              <AppText size={14} weight="semibold" className="text-black">
                Salary Range
              </AppText>
              <TextInput
                value={salaryRange}
                onChangeText={setSalaryRange}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-400"
              />
            </View>
            <View className="flex-1 gap-1.5">
              <AppText size={14} weight="semibold" className="text-black">
                Applied Date
              </AppText>
              <TextInput
                value={appliedDate}
                onChangeText={setAppliedDate}
                className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-400"
              />
            </View>
          </View>

          {/* Interview Notes */}
          <View className="gap-1.5">
            <AppText size={14} weight="semibold" className="text-black">
              Interview Notes
            </AppText>
            <TextInput
              value={notes}
              onChangeText={setNotes}
              multiline
              textAlignVertical="top"
              className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black placeholder:text-gray-400 h-32"
            />
          </View>
        </View>

        {/* Update button */}
        <Button label="Update Application" onPress={() => router.back()} />

        {/* Delete */}
        <View className="items-center gap-2 mt-2">
          <TouchableOpacity
            onPress={handleDelete}
            className="flex-row items-center gap-2"
          >
            <Feather name="trash-2" size={16} color="#dc2626" />
            <AppText size={15} weight="semibold" className="text-red-600">
              Delete application
            </AppText>
          </TouchableOpacity>
          <AppText size={12} className="text-gray-400 text-center px-6">
            Deleting this application will permanently remove all associated data and interview history.
          </AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}