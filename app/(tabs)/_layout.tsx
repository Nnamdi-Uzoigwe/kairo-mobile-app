import AppText from "@/components/ui/AppText";
import { router, Tabs, useSegments } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from '@expo/vector-icons/Octicons';

export default function TabsLayout() {
    const segments = useSegments();
    const currentTab = segments[segments.length - 1];

    const showFAB = currentTab === "home" || currentTab === "jobs";

    return (
        <View style={{ flex: 1 }}>
            <Tabs screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: "#630ED4"
                }}>
                <Tabs.Screen name="home" options={{
                    tabBarIcon: ({color, size}) => (
                        <Foundation name="home" size={size} color={color} />
                    )
                }} />
                <Tabs.Screen 
                    name="jobs" 
                    options={{
                        tabBarIcon: ({ color, size}) => (
                            <MaterialCommunityIcons name="briefcase" size={size} color={color} />
                        )
                    }}

                />
                <Tabs.Screen 
                    name="stats"
                    options={{
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcons name="insert-chart-outlined" size={size} color={color} />
                        )
                    }} 

                />
                <Tabs.Screen 
                    name="settings"
                    options={{
                         tabBarIcon: ({color, size}) => (
                            <Octicons name="gear" size={size} color={color} />
                        )
                    }}    
                />
            </Tabs>

            {showFAB && (
                <TouchableOpacity
                    onPress={() => router.push("/applications/add")}
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