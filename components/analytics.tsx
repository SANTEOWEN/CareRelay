import { TrendingUp } from "lucide-react-native";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

//TODO: CONNECT CASES CONTEXT HERE :)

const Analytics = () => {
  return (
    <Card className="my-2 bg-[#fbfaf9]">
          <CardHeader className="flex-row gap-0">
            <View className="flex-1 items-start">
              <Text className="text-[#969696]">Today at a glance</Text>
            </View>
            <View className="flex-1 items-end">
              <Text className="text-[#969696] text-sm">Update now</Text>
            </View>
          </CardHeader>
          <CardContent>
            <View className="flex-row gap-2">
              <View className="flex-1">
                <Card className="py-3">
                  <View className="flex-col">
                    <View className="mx-2">
                      <CardTitle>
                        <Text className="text-lg">3</Text>
                      </CardTitle>
                    </View>
                    <View className="mx-2">
                      <CardDescription>
                        <Text className="text-[#9b9a9a] text-sm">
                          Active Cases
                        </Text>
                      </CardDescription>
                    </View>
                  </View>
                </Card>
              </View>
              <View className="flex-1">
                <Card className="py-3">
                  <View className="flex-col">
                    <View className="mx-2">
                      <CardTitle>
                        <Text className="text-lg">5</Text>
                      </CardTitle>
                    </View>
                    <View className="mx-2">
                      <CardDescription>
                        <Text className="text-[#9b9a9a] text-sm">
                          Completed
                        </Text>
                      </CardDescription>
                    </View>
                  </View>
                </Card>
              </View>
              <View className="flex-1">
                <Card className="py-3">
                  <View className="flex-col">
                    <View className="mx-2">
                      <CardTitle>
                        <Text className="text-lg">2</Text>
                      </CardTitle>
                    </View>
                    <View className="mx-2">
                      <CardDescription>
                        <Text className="text-[#9b9a9a] text-sm">Pending</Text>
                      </CardDescription>
                    </View>
                  </View>
                </Card>
              </View>
            </View>
          </CardContent>
          <CardFooter className="mt-5">
            <View className="flex-1 items-start">
              <Text className="text-[#969696]">On-time rate</Text>
            </View>
            <View className="flex-1 items-end">
              <Badge className="bg-[#00c417]">
                <TrendingUp color={"white"} size={15} />
                <Text>97%</Text>
              </Badge>
            </View>
          </CardFooter>
        </Card>
  )
}

export default Analytics

const styles = StyleSheet.create({})