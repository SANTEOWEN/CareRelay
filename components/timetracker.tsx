import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { THEME } from "@/lib/theme";
import { useTime } from "@/utils/TimeContext";
import { LogIn, LogOut } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { useColorScheme, View } from "react-native";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Icon } from "./ui/icon";

export default function TimeTracker() {
  const colorScheme = useColorScheme();
  const theme = THEME[colorScheme ?? "light"];
  const isDark = colorScheme == "dark";

  const {
    currentSession,
    clockIn,
    clockOut,
    startBreak,
    endBreak,
    getTodayWorkSummary,
    sessions,
  } = useTime();

  const { hours, minutes } = getTodayWorkSummary();

  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [day, setDay] = useState<Boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const hours: any = new Date().getHours();
      hours >= 6 && hours < 18;
      setDay(hours);
    }, 60 * 1000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentHours = () => {
    if (currentSession.status == "out" || !currentSession.timeIn) return 0;

    const now = currentTime.getTime();
    const timeIn = currentSession.timeIn.getTime();
    const breakTime = currentSession.totalBreakTime;

    const workTime = now - timeIn - breakTime;
    const currentBreakTime =
      currentSession.status === "break" && currentSession.breakStart
        ? now - currentSession.breakStart.getTime()
        : 0;

    return Math.max((workTime - currentBreakTime) / (1000 * 60 * 60), 0);
  };

  const getTotalBreakTime = () => {
    let totalBreak = currentSession.totalBreakTime;
    if (currentSession.status === "break" && currentSession.breakStart) {
      totalBreak += currentTime.getTime() - currentSession.breakStart.getTime();
    }
    return totalBreak / (1000 * 60 * 60);
  };

  const formatTime = (date: Date | null) => {
    if (!date) return "--:--";
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatHours = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  const getStatusDisplay = () => {
    switch (currentSession.status) {
      case "in":
        return (
          <Badge variant={"outline"} className="">
            <Text variant={"small"} className="font-normal">
              CLOCKED IN
            </Text>
          </Badge>
        );
      case "out":
        return (
          <Badge variant={"outline"} className="">
            <Text variant={"small"} className="font-normal">
              CLOCKED OUT
            </Text>
          </Badge>
        );
      case "break":
        return (
          <Badge variant={"outline"} className="">
            <Text variant={"small"} className="font-normal">
              ON BREAK
            </Text>
          </Badge>
        );
      default:
        return (
          <Badge variant={"outline"} className="">
            <Text variant={"small"} className="font-normal">
              UNKNOWN
            </Text>
          </Badge>
        );
    }
  };

  const statusDisplay = getStatusDisplay();
  const currentHours = getCurrentHours();
  //For future purposes.
  const totalBreakHours = getTotalBreakTime();

  return (
    <>
      <Card className="py-5">
        <CardHeader className="flex-row gap-2 mb-2">
          <View className="flex-1 items-start">
            <CardTitle>
              <Text className="font-normal">
                Currently {formatTime(currentTime)}
              </Text>
            </CardTitle>
          </View>
          <View className="flex-1 items-end overflow-auto">
            <View className="flex-row gap-1">
              {statusDisplay}
              <Badge className={day ? "bg-yellow-300" : "bg-primary"}>
                <Text>{day ? "Day" : "Night"}</Text>
              </Badge>
            </View>
          </View>
        </CardHeader>

        <CardContent className="flex-col gap-5">
          <View className="flex-row justify-between gap-2">
            <View className="flex-1 items-start">
              <Text
                variant={"small"}
                className="text-muted-foreground font-normal"
              >
                Last Action
              </Text>
            </View>
            <View className="flex-1 items-end">
              <Text className="font-medium" variant={"small"}>
                {currentSession.timeIn
                  ? formatTime(currentSession.timeIn)
                  : formatTime(currentSession.timeOut)}
                {currentSession.status == "in" ? "Time In" : "Time Out"}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between gap-2">
            <View className="flex-1 items-start">
              <Text variant={"small"} className="text-muted-foreground font-normal">
                Today
              </Text>
            </View>

            <View className="flex-1 items-end">
              <Text variant={"small"} className="font-medium">
                {hours}hr {minutes}mins on shift
              </Text>
            </View>
          </View>
        </CardContent>

        <CardFooter className="mt-3">
          <View className="flex-row justify-between gap-2">
            <View className="flex-1">
              <Button
                className="rounded-full bg-custom-accent"
                size={"lg"}
                onPress={clockIn}
                variant={"outline"}
              >
                <Icon as={LogIn} />
                <Text>Time In</Text>
              </Button>
            </View>
            <View className="flex-1">
              <Button
                className="rounded-full bg-card"
                size={"lg"}
                onPress={clockOut}
                variant={"outline"}
              >
                <Icon as={LogOut} />
                <Text>Time Out</Text>
              </Button>
            </View>
          </View>
        </CardFooter>
      </Card>
    </>
  );
}
