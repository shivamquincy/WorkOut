import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useAuth } from '../../context/authContext'; // Adjust the path as necessary

export default function Profile() {
  const { logout } = useAuth(); // Destructure the logout function from the useAuth hook

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      // Optionally, navigate the user to the login screen or show a success message
    } catch (error) {
      console.error('Failed to log out:', error);
      // Handle logout errors, e.g., by showing an error message
    }
  };

  return (
    <View>
      <Text>Profile</Text>
      {/* Logout button using TouchableOpacity */}
      <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: '#0569FF', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: '#fff' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
