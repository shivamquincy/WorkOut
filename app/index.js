import React from 'react';
import { View, Text,ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

export default function StartPage() {
  return (
    <View className ='flex-1 justify-center items-center'>
      <ActivityIndicator size="large" color="blue" />
     {/* <Text className="pt-40 text-3xl text-center">
      Home Screen
     </Text> */}
    </View>
  );
}
