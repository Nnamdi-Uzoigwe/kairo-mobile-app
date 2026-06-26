import React, { useRef, useState } from "react";
import {
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";

interface OtpInputProps {
  length?: number;
  onCodeFilled?: (code: string) => void;
}

export default function OtpInput({
  length = 6,
  onCodeFilled,
}: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    // Only allow numbers
    const value = text.replace(/[^0-9]/g, "");

    if (!value) {
      const updatedOtp = [...otp];
      updatedOtp[index] = "";
      setOtp(updatedOtp);
      return;
    }

    const updatedOtp = [...otp];
    updatedOtp[index] = value[0];
    setOtp(updatedOtp);

    // Move to next input
    if (index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    const code = updatedOtp.join("");

    if (code.length === length) {
      onCodeFilled?.(code);
    }
  };

  const handleBackspace = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-row justify-between">
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            inputs.current[index] = ref;
          }}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleBackspace(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          textAlign="center"
          className="h-16 w-14 bg-white rounded-xl border border-gray-300 text-2xl font-bold"
        />
      ))}
    </View>
  );
}