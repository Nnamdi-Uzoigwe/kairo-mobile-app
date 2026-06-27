import { useState } from "react";
import {
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AppText from "./AppText";
import Feather from "@expo/vector-icons/Feather";

export interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  placeholder?: string;
  value?: string;
  items: DropdownItem[];
  onChange: (value: string) => void;
}

export default function Dropdown({
  label,
  placeholder = "Select an option",
  value,
  items,
  onChange,
}: DropdownProps) {
  const [visible, setVisible] = useState(false);

  const selectedItem = items.find((item) => item.value === value);

  return (
    <View>
      {label && (
        <AppText size={17} weight="semibold" numberOfLines={1} className="mb-2 font-semibold text-gray-700">
          {label}
        </AppText>
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setVisible(true)}
        className="flex-row items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-4"
      >
        <AppText
          className={
            selectedItem ? "text-black" : "text-gray-400"
          }
        >
          {selectedItem?.label ?? placeholder}
        </AppText>
        <Feather name="chevron-down" size={18} color="#6b7280" />
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
      >
        <Pressable
          className="flex-1 justify-center bg-black/40 px-6"
          onPress={() => setVisible(false)}
        >
          <Pressable
            className="rounded-2xl bg-white p-2"
            onPress={() => {}}
          >
            {items.map((item) => (
              <TouchableOpacity
                key={item.value}
                onPress={() => {
                  onChange(item.value);
                  setVisible(false);
                }}
                className="border-b border-gray-100 px-4 py-4"
              >
                <AppText
                  className={
                    item.value === value
                      ? "font-semibold text-violet-600"
                      : "text-black"
                  }
                >
                  {item.label}
                </AppText>
              </TouchableOpacity>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}