import React from "react";
import { Text, TextProps } from "react-native";

type FontWeight =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "italic";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  className?: string;
  weight?: FontWeight;
  size?: number;
  color?: string;
}

const fontMap = {
  light: "DMSans-Light",
  regular: "DMSans-Regular",
  medium: "DMSans-Medium",
  semibold: "DMSans-SemiBold",
  bold: "DMSans-Bold",
  extrabold: "DMSans-ExtraBold",
  italic: "DMSans-Italic",
};

export default function AppText({
  children,
  className,
  weight = "regular",
  size,
  color,
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      className={className}
      style={[
        {
          fontFamily: fontMap[weight],
          fontSize: size,
          color,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}