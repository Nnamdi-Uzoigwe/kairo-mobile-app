import Feather from "@expo/vector-icons/Feather";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import ApplicationCard from "../ui/ApplicationCard";
import AppText from "../ui/AppText";
import { useState } from "react";

const tabs = [
    {
        id: "1",
        label: "All"
    },
    {
        id: "2",
        label: "Applied"
    },
    {
        id: "3",
        label: "Offer"
    },
    {
        id: "4",
        label: "Interviewing"
    },
    {
        id: "5",
        label: "Screening"
    },
    {
        id: "6",
        label: "Rejected"
    },

]

export default function SearchBar() {
    const [active, setActive] = useState("All")
    return (
        <View className="mt-3 relative">
            <Feather className="absolute top-4 left-3" name="search" size={18} color="black" />
            <TextInput 
                placeholder="Search applications..."
                className="p-4 pl-10 rounded-xl"
                style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#949494" }}
            />

            <View className="mt-4 gap-3 w-full">
                <FlatList 
                    data={tabs}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        gap: 10
                    }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setActive(item.label)} className={`${active === item.label ? "bg-[#630ED4]" : "bg-[#c7cfdc]"} px-10 py-4 rounded-full`}>
                            <AppText color={active === item.label ? "white" : "black"} weight="semibold">{item.label}</AppText>
                        </TouchableOpacity>
                    )}
                />

            </View>
        </View>
    )
}