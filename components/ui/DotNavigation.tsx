// components/ui/DotNavigation.tsx
import React, { useEffect, useRef } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';

interface DotNavigationProps {
  total: number;
  current: number;
  onDotPress?: (index: number) => void;
  dotSize?: number;
  activeColor?: string;
  inactiveColor?: string;
}

export default function DotNavigation({ 
  total, 
  current, 
  onDotPress,
  dotSize = 10,
  activeColor = '#7C3AED',
  inactiveColor = '#D1D5DB'
}: DotNavigationProps) {
  return (
    <View className="flex-row items-center justify-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <Dot
          key={index}
          index={index}
          isActive={index === current}
          onPress={onDotPress}
          dotSize={dotSize}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        />
      ))}
    </View>
  );
}

// Individual Dot with Animation
function Dot({ 
  index, 
  isActive, 
  onPress, 
  dotSize,
  activeColor,
  inactiveColor
}: {
  index: number;
  isActive: boolean;
  onPress?: (index: number) => void;
  dotSize: number;
  activeColor: string;
  inactiveColor: string;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const width = useRef(new Animated.Value(dotSize)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: isActive ? 1.3 : 1,
        friction: 3,
        tension: 100,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: isActive ? 1 : 0.5,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.spring(width, {
        toValue: isActive ? dotSize * 2 : dotSize,
        friction: 5,
        tension: 80,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isActive]);

  return (
    <TouchableOpacity
      onPress={() => onPress?.(index)}
      activeOpacity={0.7}
      disabled={isActive}
    >
      <Animated.View
        style={{
          width: width,
          height: dotSize,
          borderRadius: dotSize / 2,
          backgroundColor: isActive ? activeColor : inactiveColor,
          transform: [{ scale }],
          opacity,
        }}
      />
    </TouchableOpacity>
  );
}