import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabsLayout() {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen name="dashboard" options={{ 
          title: "Dashboard",
          tabBarIcon:({color}) => <MaterialIcons name="dashboard" size={24} color={color} />,
          headerTitleAlign: "center",
          tabBarActiveTintColor: "#154e63"
        }} />
        <Tabs.Screen name="cases" options={{ 
          title: "Cases",
          tabBarIcon:({color}) => <MaterialCommunityIcons name="folder-heart-outline" size={24} color={color} />
        }} />
        <Tabs.Screen name="history" options={{ 
          title: "History",
          tabBarIcon:({color}) => <FontAwesome name="history" size={24} color={color} />
        }} />
      </Tabs>
    </SafeAreaProvider>
  );
}

