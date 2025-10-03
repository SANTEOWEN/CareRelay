import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Plus, SlidersVertical } from "lucide-react-native";
import React, { useState } from "react";
import { View } from "react-native";

type FilterOption = "All" | "Active" | "Completed" | "Cancelled";

export default function cases() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const filters: FilterOption[] = ["All", "Active", "Completed", "Cancelled"];

  const handleFilterPress = (filter: FilterOption) => {
    setActiveFilter(filter);
    //TODO: Add case switch for different filtering.
  };

  return (
    <View>
      <View className="flex-row gap-3 px-2 my-3">
        <Input className="w-0 flex-1 border-none" placeholder="Search Cases"/>
        <Button variant={'outline'}>
          <Icon as={Plus}/>
        </Button>
        <Button variant={'outline'}>
          <Icon as={SlidersVertical}/>
        </Button>
      </View>

      <View className="flex-row my-3 px-2 gap-4">
        {filters.map((filter) => (
          <Button variant={'outline'} key={filter} onPress={() => handleFilterPress(filter)} className={activeFilter == filter ? `light:bg-primary`: `dark:bg-secondary`}>
             <Text variant={'small'} className={activeFilter == filter ? `text-xs font-normal light:text-accent` : `text-gray-500 text-xs font-normal`}>{filter}</Text>
          </Button>
        ))}
      </View>

      <View className="px-2 my-5">
        <Text variant={'small'} className="font-normal text-muted-foreground">Saved Cases</Text>
      </View>
    </View>
  );
}
