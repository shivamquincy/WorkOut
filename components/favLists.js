import React from 'react';
import{Link, router} from "expo-router"
import { View, Text, FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { workoutData } from './data';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const renderItem = ({ item }) => {
    return (
       <Link href={`/listings/${item.id}`} asChild>
      <TouchableOpacity  >
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.bookmark}> 
            <Ionicons name="bookmark" size={20} color={"white"}/>
            </View>
            <Text style={styles.itemTxt}>
               {item.name} 
            </Text>
            <View style={{flexDirection:"row", alignItems: 'center', gap: 4}}>
            <AntDesign name="infocirlceo" size={18} color="#2563eb" />
            <Text>
              {item.difficulty}
            </Text>
            </View>
        </View>
      </TouchableOpacity>
      </Link>
     
      
    );
};


// Correctly define FavLists without expecting workoutData as a prop
export default function FavLists() {
  return (
    <View>
      <FlatList 
        data={workoutData} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id} // Assuming each item has a unique id
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
item: {
    backgroundColor: "#e5e5e5",
    padding:10,
    marginLeft: 20,
    borderRadius:10,
    marginRight:20,
    width: 220,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius:10,
        marginBottom: 30,
    },
    bookmark: {
        position:'absolute',
        top: 185,
        right: 30,
        backgroundColor: "#2563eb",
        padding:10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "white"

    },
    itemTxt: {
      fontSize: 16,
      fontWeight: 700,
      color: "black",
      marginBottom: 10,


    }

})