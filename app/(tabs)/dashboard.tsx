import TimeTracker from "@/components/timetracker";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { TimeProvider } from "@/lib/TimeContext";
import {
  Baby,
  Bone,
  Brain,
  HeartPulse,
  LayoutDashboard,
} from "lucide-react-native";
import React from "react";
import { ScrollView, View } from "react-native";

export default function dashboard() {
  const iconMap = {
    LayoutDashboard: LayoutDashboard,
    HeartPulse: HeartPulse,
    Bone: Bone,
    Brain: Brain,
    Baby: Baby,
  };

  type CaseData = {
    caseName: String;
    patientIdentifier: String;
    startedTime: String;
    description: String;
    icon: "LayoutDashboard" | "HeartPulse" | "Bone" | "Brain" | "Baby";
  };

  const caseData: CaseData[] = [
    {
      caseName: "General Checkup",
      patientIdentifier: "PID-001",
      startedTime: "2025-09-21T08:30:00",
      description:
        "Routine medical checkup with basic vitals and consultation.",
      icon: "LayoutDashboard",
    },
    {
      caseName: "Dental Surgery",
      patientIdentifier: "PID-002",
      startedTime: "2025-09-21T10:00:00",
      description: "Wisdom tooth extraction and follow-up care.",
      icon: "Bone",
    },
    {
      caseName: "Physical Therapy Session",
      patientIdentifier: "PID-003",
      startedTime: "2025-09-21T13:00:00",
      description: "Rehabilitation exercises for knee injury recovery.",
      icon: "Brain",
    },
    {
      caseName: "Emergency Consultation",
      patientIdentifier: "PID-004",
      startedTime: "2025-09-21T15:30:00",
      description: "Sudden chest pain diagnosis and initial treatment.",
      icon: "HeartPulse",
    },
  ];

  return (
    <TimeProvider>
      <View className="flex-1 bg-background">
        <View className="p-4">
          <TimeTracker />

          <Text className="mb-5 mt-5 text-[#949494]">Current Activities</Text>

          <ScrollView>
            {caseData.map(
              ({
                caseName,
                patientIdentifier,
                startedTime,
                description,
                icon,
              }: CaseData) => {
                const IconComponent = iconMap[icon];

                return (
                  <Card className="bg-[#fbfaf9] justify-center items-center py-3 my-1">
                    <View className="flex-row">
                      <View className="flex-none px-3 justify-center items-center">
                        <HeartPulse size={25} />
                      </View>

                      <View className="flex-1 flex-col">
                        <CardHeader className="px-0">
                          <CardTitle>
                            <Text>{caseName}</Text>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="px-0">
                          <Text className="text-[#969696]">
                            OR 2 - Patient: {patientIdentifier} - 9:30
                          </Text>
                        </CardContent>
                      </View>

                      <View className="justify-center items-center pr-4">
                        <Badge className="bg-[#d3d3d3]">
                          <Text className="text-base text-black">
                            In Progress
                          </Text>
                        </Badge>
                      </View>
                    </View>
                  </Card>
                );
              }
            )}
          </ScrollView>
        </View>
      </View>
    </TimeProvider>
  );
}

<Card className="bg-[#fbfaf9] justify-center items-center py-3">
  <View className="flex-row">
    <View className="flex-none px-3 justify-center items-center">
      <HeartPulse size={25} />
    </View>

    <View className="flex-1 flex-col">
      <CardHeader className="px-0">
        <CardTitle>
          <Text>Pre-op Prep</Text>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Text className="text-[#969696]">OR 2 - Patient: P-2941 - 9:30 </Text>
      </CardContent>
    </View>

    <View className="justify-center items-center pr-4">
      <Badge className="bg-[#d3d3d3]">
        <Text className="text-base text-black">In Progress</Text>
      </Badge>
    </View>
  </View>
</Card>;
