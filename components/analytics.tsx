import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "./ui/card";
import { Text } from "./ui/text";

//TODO: CONNECT CASES CONTEXT HERE :)

const Analytics = () => {
  return (
    <Card className="py-3">
      <View className="flex-row gap-2 px-2">
        <View className="flex-1 bg-card border-border rounded-xl border p-2">
          <View className="flex-col gap-1 justify-evenly">
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              Active Cases
            </Text>
            <Text variant={"large"} className="font-bold text-xl">
              3
            </Text>
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              In progress
            </Text>
          </View>
        </View>
        <View className="flex-1 bg-card border-border rounded-xl border p-2">
          <View className="flex-col gap-1 justify-evenly">
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              Active Cases
            </Text>
            <Text variant={"large"} className="font-bold text-xl">
              3
            </Text>
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              In progress
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row gap-2 px-2">
        <View className="flex-1 bg-card border-border rounded-xl border p-2">
          <View className="flex-col gap-1 justify-evenly">
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              Total Time
            </Text>
            <Text variant={"large"} className="font-bold text-xl">
              6h 20m
            </Text>
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              logged
            </Text>
          </View>
        </View>

        <View className="flex-1 bg-card border-border rounded-xl border p-2">
          <View className="flex-col gap-1 justify-evenly">
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              Completed Today
            </Text>
            <Text variant={"large"} className="font-bold text-xl">
              5
            </Text>
            <Text
              variant={"small"}
              className="text-xs text-muted-foreground font-light"
            >
              cases closed
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default Analytics;

const styles = StyleSheet.create({});
