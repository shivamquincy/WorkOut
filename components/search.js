import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {
  return (
    <View style={styles.searchSection}> 
      <View style={styles.searchbar}>
        <Ionicons name="search" size={18} style={{marginRight:5, paddingVertical:2}} />
        <TextInput placeholder='Search...' style={{paddingVertical:2, color:"black"}} />
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.btn}>
          <Ionicons name="options" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 20,
    alignItems: 'center', // Ensure vertical alignment of items in the row
  },
  searchbar: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#e5e5e5",
    width: "80%",
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#2563eb",
    padding: 10, // Add some padding around the icon for better touch target
    borderRadius: 5, // Optional: adds rounded corners to the button
    padding: 12,
    marginLeft:20
    
  }
});
