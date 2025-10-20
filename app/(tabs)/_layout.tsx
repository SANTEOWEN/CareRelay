import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index' options={{title: 'Home', headerTitleAlign: 'center'}}/>
    </Tabs>
  )
}

export default TabLayout