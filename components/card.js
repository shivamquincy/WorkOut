import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Define a reusable component for exercise buttons
export default function ExerciseButton({ label }) {
  return (
    <TouchableOpacity>
      <View className="bg-neutral-100 rounded-2xl p-4">
        <Text className="text-xl font-bold text-blue-600">{label}</Text>
      </View>
    </TouchableOpacity>
  );
}



