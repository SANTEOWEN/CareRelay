import Activities from "@/components/activities";
import TimeTracker from "@/components/timetracker";
import { Text } from "@/components/ui/text";
import { TimeProvider } from "@/utils/TimeContext";
import React from "react";
import { ScrollView, View } from "react-native";

export default function dashboard() {
  return (
      <View className="p-2">
        <TimeProvider>
          <TimeTracker />
        </TimeProvider>

        {/* <Analytics/> */}

        <View className="mb-3 mt-3">
        <Text variant={"muted"}>Current Activities</Text>
        </View>

        <ScrollView>
          <Activities/>
        </ScrollView>
      </View>
  );
}
