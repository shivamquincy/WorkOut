import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import TabBar from '../../components/TabBar'
export default function _layout() {
  return (
   <Tabs 
   tabBar={props => <TabBar{...props} />} 
   >
    <Tabs.Screen
    name="home"
    options={{
      title:"Home"
    }}
    />
    <Tabs.Screen
    name="profile"
    options={{
      title:"Profile"
    }}
    />
    <Tabs.Screen
    name="settings"
    options={{
      title:"Settings"
    }}
    />
    <Tabs.Screen
    name="workouts"
    options={{
      title:"Workouts"
    }}
    />
    </Tabs>
  )
}