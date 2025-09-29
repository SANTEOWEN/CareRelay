import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Plus, SlidersVertical } from "lucide-react-native";
import React, { useState } from 'react';
import { View } from 'react-native';


type FilterOption = 'All' | 'Active' | 'Completed' | 'Cancelled';

export default function cases() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All')
  const filters: FilterOption[] = ['All', 'Active', 'Completed', 'Cancelled']
  
  const handleFilterPress = (filter: FilterOption) => {
    setActiveFilter(filter)
    //TODO: Add case switch for different filtering.
  }

  return (
    <View className='p-3 flex-col gap-2'>
      <View className='justify-center flex-row gap-2'>
        <View className='w-72'>
          <Input placeholder='Search cases'/>
        </View>
        <Button variant={'outline'}><Plus/></Button>
        <Button variant={'outline'}><SlidersVertical/></Button>
      </View>
      <View className='flex-row gap-2'>
        {filters.map((filter) => (
          <Button variant={'outline'} key={filter} onPress={() => handleFilterPress(filter)}>
            <Text className={activeFilter === filter ? 'text-black' : 'text-gray-500'}>
              {filter}
            </Text>
          </Button>
        ))}
      </View>
    </View>
  );
}

