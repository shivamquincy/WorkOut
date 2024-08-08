import { View, Text } from 'react-native'
import React from 'react'
import AddWorkout from "../../components/addWorkout";
import WorkoutList from "../../components/workoutList";
export default function Workouts() {
  return (
    <View>
     <AddWorkout />
     <WorkoutList />
    </View>
  )
}