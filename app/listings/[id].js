import React from 'react';
import { Image, StyleSheet, View, Dimensions,Text, TouchableOpacity } from 'react-native';
import {Stack, useLocalSearchParams, useRouter } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { workoutData } from '../../components/data';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


const { width } = Dimensions.get('window');

export default function ListingDetails() {
  const router = useRouter();
    const { id } = useLocalSearchParams();
    const listing = workoutData.find(item => item.id === id);

    if (!listing) {
       <Text>No simillar listing</Text>// Or return a fallback UI
    }

    return (
      <>
      <Stack.Screen options={{
     headerTransparent: true,
     headerTitle: "",
     headerLeft: () => (
      <TouchableOpacity onPress={() => router.back()} style={{backgroundColor:"rgba(255,255,255,0.5", borderRadius: 10, padding: 4}}>
   <View style={{backgroundColor: "white", padding:6, borderRadius: 10 }}>
    <Feather name="arrow-left" size={20} color="#2563eb" />
   </View>

      </TouchableOpacity>
     ),
     headerRight: () => (
      <TouchableOpacity onPress={() => {}} style={{backgroundColor:"rgba(255,255,255,0.5", borderRadius: 10, padding: 4}}>
   <View style={{backgroundColor: "white", padding:6, borderRadius: 10 }}>
   <Ionicons name="bookmark" size={20} color={"#2563eb"}/>
   </View>

      </TouchableOpacity>
     )
      }} />
     <View style={styles.container}>
            <Image source={listing.image} style={styles.image} />
            <View style={styles.contentWrapper}>
            <Text style ={styles.listingName}>{listing.name}</Text>
               <View style={styles.listingDifficultyWrapper}>
               <MaterialCommunityIcons name="run-fast" size={24} color= "#2563EB" />
                <Text style={styles.listingDifficultyTxt}>{listing.difficulty}</Text>
               </View>



               <View style={styles.highLightWrapper} >
                <View style={{flexDirection:'row'}}>
                  <View style={styles.highlightIcon}>
                   <Ionicons name="time" size={18} color="#2563EB"/> 
                   </View>
                   <View>
                    <Text style={styles.highLightTxt}>Duration</Text>
                    <Text style={{fontsize: 15, fontWeight:600}}>{listing.duration} mins</Text>
                    <Text></Text>
                   </View>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={styles.highlightIcon}>
                  <MaterialCommunityIcons name="weight" size={18} color="#2563EB" />
                   </View>
                   <View>
                    <Text style={styles.highLightTxt}>Ideal for</Text>
                    <Text style={{fontsize: 15, fontWeight:600}}>Gaining Muscle</Text>
                    <Text></Text>
                   </View>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={styles.highlightIcon}>
                  <Entypo name="list" size={18} color="#2563EB" /> 
                   </View>
                   <View>
                    <Text style={styles.highLightTxt}>Rep Range</Text>
                    <Text style={{fontsize: 15, fontWeight:600}}>15,12,10</Text>
                   </View>
                </View>
               </View>
               <Text className="font-bold text-blue-600 -mt-[6rem] text-2xl">
                Exercises 
               </Text>
            </View>
       </View>
        </>
    );
}

const styles = StyleSheet.create({
  container : {
   flex: 1,
   backgroundColor: "white"
  },
    image: {
        width: width, // Use the width obtained from Dimensions
        height: 300,
    },
    contentWrapper: {
      padding:20
    },
    listingName: {
      fontSize: 24,
      fontWeight: '500',
      color: "Black",
      letterSpacing: 0.5
    },
    listingDifficultyWrapper: {
      flexDirection: "row",
      marginTop: 5,
      marginBottom: 10,
      alignItems: "center",
},
listingDifficultyTxt : {
  fontSize:14,
  marginLeft: 5,
  color: "black"
},
highLightWrapper: {
  flexDirection: "row",
  marginVertical: 20,
justifyContent: "space-between"
},
highlightIcon : {
  backgroundColor: '#f4f4f4',
  paddingHorizontal: 8,
 marginBottom: 80,
 marginTop: 4,
  paddingVertical: 5,
  borderRadius: 8,
  marginRight: 5,
  alignItems: "center"

},
highLightTxt: {
  fontSize: 14,
  color: "black"
}
});
