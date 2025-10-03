import Activities from "@/components/activities";
import Analytics from "@/components/analytics";
import TimeTracker from "@/components/timetracker";
import { Text } from "@/components/ui/text";
import { TimeProvider } from "@/utils/TimeContext";
import React from "react";
import { ScrollView, View } from "react-native";

export default function dashboard() {
  return (
      <View className="p-3 flex-col gap-3">
        <TimeProvider>
          <TimeTracker />
        </TimeProvider>

        <Analytics/>

        <Text variant={"muted"}>Current Activities</Text>

        <ScrollView>
          <Activities/>
        </ScrollView>
      </View>
  );
}
