// import AppText from "@/components/ui/AppText";
// import { Tabs } from "expo-router";
// import { View } from "react-native";

// export default function TabsLayout() {
//     return (
//         <Tabs screenOptions={{
//             headerShown: false,
//         }}>
//             <Tabs.Screen name="home" />
//             <Tabs.Screen name="jobs" />
//             <Tabs.Screen name="stats" />
//             <Tabs.Screen name="settings" />
    
//         </Tabs>
//     )
// }


import AppText from "@/components/ui/AppText";
import { Tabs, useSegments } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function TabsLayout() {
    const segments = useSegments();
    const currentTab = segments[segments.length - 1];

    const showFAB = currentTab === "home" || currentTab === "jobs";

    return (
        <View style={{ flex: 1 }}>
            <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen name="home" options={{
                    tabBarIcon: ({color, size}) => (
                        <Foundation name="home" size={24} color="black" />
                    )
                }} />
                <Tabs.Screen name="jobs" />
                <Tabs.Screen name="stats" />
                <Tabs.Screen name="settings" />
            </Tabs>

            {showFAB && (
                <TouchableOpacity
                    onPress={() => {/* navigate to add application */}}
                    style={{
                        position: "absolute",
                        bottom: 100,
                        right: 24,
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                        backgroundColor: "#7C3AED",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <AppText style={{ color: "white", fontSize: 28, lineHeight: 30 }}>
                        <AntDesign name="plus" size={26} color="white" />
                    </AppText>
                </TouchableOpacity>
            )}
        </View>
    );
}