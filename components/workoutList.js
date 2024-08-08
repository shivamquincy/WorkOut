import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAuth } from '../context/authContext';

const WorkoutList = () => {
  const { getWorkouts } = useAuth();
  const [workouts, setWorkouts] = useState([]);
// hooks vs functions 
  useEffect(() => {
    const fetchWorkouts = async () => {
      const result = await getWorkouts(); // This calls the getWorkouts function from useAuth
      console.log(result); // Debugging statement to check the result
      if (result.success) {
        setWorkouts(result.data);
      } else {
        console.error('Failed to get workouts: ', result.msg);
      }
    };
    fetchWorkouts();
  }, [getWorkouts]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Difficulty: {item.difficulty}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Reps: {item.reps}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WorkoutList;
