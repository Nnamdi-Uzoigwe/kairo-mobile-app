import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import AppText from "./AppText";

interface AppButtonProps {
  label: string;
  onPress: () => void;

  icon?: React.ReactNode;
  iconPosition?: "left" | "right";

  loading?: boolean;
  disabled?: boolean;

  variant?: "primary" | "secondary" | "outline";

  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function Button({
  label,
  onPress,
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  variant = "primary",
  style,
  textStyle,
}: AppButtonProps) {
  const isOutline = variant === "outline";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        isOutline && styles.outline,
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? "#0F172A" : "#fff"} />
      ) : (
        <View style={styles.content}>
          {icon && iconPosition === "left" && (
            <View style={styles.icon}>{icon}</View>
          )}

          <AppText
            style={[
              styles.text,
              isOutline && styles.outlineText,
              textStyle,
            ]}
          >
            {label}
          </AppText>

          {icon && iconPosition === "right" && (
            <View style={styles.icon}>{icon}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%"
  },

  primary: {
    backgroundColor: "#630ED4",
  },

  secondary: {
    backgroundColor: "#111827",
  },

  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  disabled: {
    opacity: 0.5,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    marginHorizontal: 6,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  outlineText: {
    color: "#111827",
  },
});