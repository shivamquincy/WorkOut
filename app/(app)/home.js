import { View, Text, TouchableOpacity, Image,SafeAreaView,StatusBar } from 'react-native';
import React from 'react';
import { useAuth } from '../../context/authContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import ExerciseButton from '../../components/card';
import WorkoutList from '../../components/workoutList';
import FavLists from '../../components/favLists';
import Search from '../../components/search';

export default function Home() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return (
  <SafeAreaView className ="flex-1 bg-white space-y-5" edges={['top']}>
    <StatusBar style="dark" />
     <View className="flex-row justify-between items-center mx-5">
      <View className="space-y-2" >
      <Text style={{fontSize:hp(4.0)}} 
      className="font-bold tracking-wider text-neutral-700"
      > 
      YOUR NEXT WORKOUT
      </Text>
      <Text style={{fontSize:hp(4.5)}} 
      className="font-bold tracking-wider text-blue-600"
      > 
       @17:30💪
      </Text>
</View>
<View className="font-bold justify-center items-center space-y-2">
  <Image source = {require("../../components/assets/images/vqamy.jpg")}
  style={{height: hp(6), width: hp(6)}} className="rounded-full" />
<View className="bg-neutral-200 mt-4 rounded-full flex justify-center items-center">
<Ionicons name="notifications" size={30} color="gray" / >


</View>

</View>
     </View>
    <Search />
     <Text className="p-4 font-bold text-gray-700 text-2xl mt-2">
      Categories
     </Text>
     <View className="pt-2 flex flex-row gap-3 items-center justify-center">
      <ExerciseButton label="Chest" />
      <ExerciseButton label="Back" />
      <ExerciseButton label="Legs" />
      <ExerciseButton label="Abs" />
      <ExerciseButton label="Cardio" />
    </View> 
    <Text className="text-2xl mb-3 mt-2 p-4 font-bold ">
      Favourite Lists ⭐
    </Text>
   <FavLists />
 
  </SafeAreaView>
 
 
  );

}
