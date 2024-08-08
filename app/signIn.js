import { View, Text, Image, Alert, TextInput,TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/authContext';
import { Octicons } from '@expo/vector-icons';
import Loading from '../components/loading';
import CustomKeyboardView from '../components/customKeyboard';

export default function Signin() {
  const router = useRouter();
  const emailRef = useRef("");
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef("");
  const { login } = useAuth(); // Destructure the login function from the useAuth hook

  const handleLogin = async () => {
    console.log('Login button pressed');
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Sign In', "Please fill in all the fields!");
      return;
    }
    setLoading(true);
    
    // Call the actual login function from AuthContextProvider
    const authResult = await login(emailRef.current, passwordRef.current);
    
    if (authResult.success) {
      Alert.alert('Success', "Logged in successfully!");
      router.push('home'); // Navigate to home screen upon successful login
    } else {
      Alert.alert('Error', authResult.msg); // Show error message if login fails
    }

    setLoading(false);
  };

  return (
    <CustomKeyboardView className="flex-1">
      <StatusBar style="dark" />
      <View style={{ paddingHorizontal: wp(5), paddingTop: hp(12) }} className="flex-1 gap-12">
        <View className="items-center">
          <Image style={{ height: hp(20) }} resizeMode="contain" source={require("../components/assets/images/signin.png")} />
        </View>
        <View className="gap-10">
          <Text style={{ fontSize: hp(4) }} className="font-bold tracking-wider text-center text-blue-600">
            Sign In
          </Text>
          {/* Forms */}
          <View className="gap-4">
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
              <Octicons name="mail" size={hp(2.7)} color="#2563eb" />
              <TextInput
                onChangeText={value => emailRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder='Email'
                placeholderTextColor={'gray'}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View className="gap-4">
              <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
                <Octicons name="lock" size={hp(2.7)} color="#2563eb" />
                <TextInput
                  onChangeText={value => passwordRef.current = value}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder='Password'
                  secureTextEntry
                  placeholderTextColor={'gray'}
                />
              </View>
              <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-right text-neutral-500">Forgot password?</Text>
            </View>
            {/* button */}
            <View>
              {loading ? (
                <View className="flex-row justify-center">
                  <Loading size={hp(8)} />
                </View>
              ) : (
                <TouchableOpacity onPress={handleLogin} style={{height:hp(6.5)}} className="bg-blue-600 opacity-90 rounded-xl justify-center items-center">
                <Text style={{fontSize:hp(2.7)}} className="text-white font-bold tracking-wider">
                  Sign In
                </Text>
              </TouchableOpacity>
              )}
            </View>
            <View className="flex-row justify-center">
              <Text style={{ fontSize: hp(1.8) }}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('signUp')}>
                <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-blue-600 opacity-90 rounded-xl justify-center items-center">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
