import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { THEME } from "@/lib/theme";
import { HeartPulse } from "lucide-react-native";
import React from "react";
import { useColorScheme, View } from "react-native";
import { Badge } from "./ui/badge";
import { Icon } from "./ui/icon";


//TODO: Create a contextProvider for the cases. and share it on the analytics. and dashboard.

const Activities = () => {
  const colorScheme = useColorScheme();
  const theme = THEME[colorScheme ?? "light"];
  const isDark = colorScheme == "dark";


  return (
    <Card className="justify-center items-center">
      <View className="flex-row justify-between gap-1">
        <View className="flex-none px-2 justify-center">
          <Icon as={HeartPulse} size={"25"} />
        </View>

        < View className="flex-1 flex-col">
          <CardHeader className="px-0">
            <CardTitle>
              <Text>General Checkup</Text>
            </CardTitle>
          </CardHeader >
          <CardContent className="px-0">
            <Text className="text-muted-foreground font-light text-sm">
              OR 2 - Patient: PID-001 - 9:30
            </Text>
          </CardContent>
        </View>
        <View className="flex-none justify-center px-2">
          <Badge variant={'outline'}>
            <Text>In Progress</Text>
          </Badge>
        </View>
      </View>
    </Card>
  );
};

export default Activities;
