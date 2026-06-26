// app/onboarding/_layout.tsx
import { Stack, useRouter, usePathname } from 'expo-router';
import { View } from 'react-native';
import DotNavigation from '@/components/ui/DotNavigation';

export default function OnboardingLayout() {
  const pathname = usePathname();
  console.log('pathname:', pathname);
  const router = useRouter();

  // Map routes to indices
  const stepMap: Record<string, number> = {
  '/step-one': 0,
  '/step-two': 1,
  '/step-three': 2,
};

  const currentStep = stepMap[pathname] ?? 0;
  const totalSteps = 3;

  const handleDotPress = (index: number) => {
  const routes = ['/onboarding/step-one', '/onboarding/step-two', '/onboarding/step-three'] as const;
  router.push(routes[index] as any);
};

  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      />
      
      {/* Fixed dot navigation at bottom */}
      <View className="absolute bottom-32 left-0 right-0 px-6">
        <DotNavigation
          total={totalSteps}
          current={currentStep}
          onDotPress={handleDotPress}
          activeColor="#7C3AED"
          inactiveColor="#D1D5DB"
          dotSize={10}
        />
      </View>
    </View>
  );
}