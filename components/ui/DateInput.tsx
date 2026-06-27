// import { useState } from "react";
// import {
//   Platform,
//   Pressable,
//   View,
// } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import Feather from "@expo/vector-icons/Feather";
// import AppText from "./AppText";

// interface Props {
//   label?: string;
//   value?: Date;
//   onChange: (date: Date) => void;
// }

// export default function DateInput({
//   label,
//   value,
//   onChange,
// }: Props) {
//   const [show, setShow] = useState(false);

//   const formattedDate = value
//     ? value.toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       })
//     : "";

//   return (
//     <View className="gap-2">
//       {label && (
//         <AppText size={16} weight="semibold">
//           {label}
//         </AppText>
//       )}

//       <Pressable
//         onPress={() => setShow(true)}
//         className="bg-white rounded-xl border border-gray-300 px-4 py-4 flex-row items-center justify-between"
//       >
//         <AppText className={value ? "text-black" : "text-gray-400"}>
//           {formattedDate || "Select date"}
//         </AppText>

//         <Feather
//           name="calendar"
//           size={18}
//           color="#6B7280"
//         />
//       </Pressable>

//       {show && (
//         <DateTimePicker
//           value={value ?? new Date()}
//           mode="date"
//           display={Platform.OS === "ios" ? "spinner" : "default"}
//           onChange={(event, selectedDate) => {
//             setShow(false);

//             if (selectedDate) {
//               onChange(selectedDate);
//             }
//           }}
//         />
//       )}
//     </View>
//   );
// }

import { useState } from "react";
import { Platform, Pressable, View, Modal, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Feather from "@expo/vector-icons/Feather";
import AppText from "./AppText";

interface Props {
  label?: string;
  value?: Date;
  onChange: (date: Date) => void;
}

export default function DateInput({ label, value, onChange }: Props) {
  const [show, setShow] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(value ?? new Date());

  const formattedDate = value
    ? value.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <View className="gap-2">
      {label && (
        <AppText size={16} weight="semibold">
          {label}
        </AppText>
      )}

      <Pressable
        onPress={() => {
          setTempDate(value ?? new Date());
          setShow(true);
        }}
        className="bg-white rounded-xl border border-gray-300 px-4 py-4 flex-row items-center justify-between"
      >
        <AppText className={value ? "text-black" : "text-[#949494]"}>
          {formattedDate || "Select date"}
        </AppText>
        <Feather name="calendar" size={18} color="#6B7280" />
      </Pressable>

      <Modal visible={show} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-2xl p-4 gap-4">
            <DateTimePicker
              value={tempDate}
              mode="date"
              display="spinner"
              textColor="#000000"
              onChange={(_, selectedDate) => {
                if (selectedDate) setTempDate(selectedDate);
              }}
            />
            <View className="flex-row gap-2">
              <TouchableOpacity
                onPress={() => setShow(false)}
                className="flex-1 border border-gray-300 rounded-xl py-4 items-center"
              >
                <AppText size={16} weight="semibold">Cancel</AppText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onChange(tempDate);
                  setShow(false);
                }}
                className="flex-1 bg-violet-500 rounded-xl py-4 items-center"
              >
                <AppText size={16} weight="semibold" color="white">Confirm</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}