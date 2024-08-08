import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/authContext';

const AddWorkout = () => {
  const { addWorkout } = useAuth();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [description, setDescription] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = async () => {
    const result = await addWorkout(name, category, difficulty,description, reps);
    if (result.success) {
      console.log('Workout added successfully');
    } else {
      console.error('Failed to add workout: ', result.msg);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Workout</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Difficulty"
        value={difficulty}
        onChangeText={setDifficulty}
      />
        <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />
      <Button title="Add Workout" onPress={handleSubmit} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default AddWorkout;
