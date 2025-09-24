import Activities from "@/components/activities";
import Analytics from "@/components/analytics";
import TimeTracker from "@/components/timetracker";
import { Text } from "@/components/ui/text";
import { TimeProvider } from "@/utils/TimeContext";
import React from "react";
import { ScrollView, View } from "react-native";

export default function dashboard() {
  return (
    <View className="flex-1">
      <View className="p-4">
        <TimeProvider>
          <TimeTracker />
        </TimeProvider>

        <Analytics/>

        <Text className="mb-3 mt-3 text-[#949494]">Current Activities</Text>

        <ScrollView>
          <Activities/>
        </ScrollView>
      </View>
    </View>
  );
}
