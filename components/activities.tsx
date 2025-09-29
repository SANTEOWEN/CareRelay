import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { Badge } from "./ui/badge";

//TODO: Create a contextProvider for the cases. and share it on the analytics. and dashboard.

const Activities = () => {
  return (
    <Card className="bg-[#fbfaf9] justify-center items-center">
      <View className="flex-row">
        <View className="flex-none px-3 justify-center items-center">
          <HeartPulse size={25} />
        </View>

        <View className="flex-1 flex-col">
          <CardHeader className="px-0">
            <CardTitle>
              <Text className="text-black">General Checkup</Text>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Text className="text-[#969696]">
              OR 2 - Patient: PID-001 - 9:30
            </Text>
          </CardContent>
        </View>
        <View className="justify-center items-center">
          <Badge variant={"outline"}>
            <Text>In Progress</Text>
          </Badge>
        </View>
      </View>
    </Card>
  );
};

export default Activities;
