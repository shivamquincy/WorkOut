import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useRef } from 'react';
import { useRouter } from 'expo-router';
import Loading from '../components/loading';
import { Octicons, Feather } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../context/authContext';
import CustomKeyboardView from '../components/customKeyboard';

export default function SignUp() {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const profileRef = useRef();
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleRegister = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
      Alert.alert('Sign Up', 'Please fill in all the fields!');
      return;
    }
    setLoading(true);
    let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current);
    setLoading(false);
    console.log('get result: ', response);
    if (!response.success) {
      Alert.alert('Sign Up', response.msg);
    }
  }

  return (
    <CustomKeyboardView className="flex-1">
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }} className="flex-1 gap-12">
        <View className="items-center">
          <Image style={{ height: hp(20) }} resizeMode="contain" source={require('../components/assets/images/signup.png')} />
        </View>
        <View className="gap-10">
          <Text style={{ fontSize: hp(4) }} className="font-bold tracking-wider text-center text-blue-600">
            Sign Up
          </Text>
          <View className="gap-4">
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
              <Octicons name="mail" size={hp(2.7)} color="#2563eb" />
              <TextInput
                onChangeText={value => emailRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email"
                placeholderTextColor="gray"
                type="email"
              />
            </View>
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
              <Octicons name="lock" size={hp(2.7)} color="#2563eb" />
              <TextInput
                onChangeText={value => passwordRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="gray"
                type="password"
              />
            </View>
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
              <Feather name="user" size={hp(2.7)} color="#2563eb" />
              <TextInput
                onChangeText={value => usernameRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Username"
                placeholderTextColor="gray"
                type="text"
              />
            </View>
            <View style={{ height: hp(7) }} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
              <Feather name="image" size={hp(2.7)} color="#2563eb" />
              <TextInput
                onChangeText={value => profileRef.current = value}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Profile URL"
                placeholderTextColor="gray"
                type="text"
              />
            </View>
          </View>
          <View>
            {loading ? (
              <View className="flex-row justify-center">
                <Loading size={hp(8)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleRegister}
                style={{ height: hp(6.5), backgroundColor: '#2563EB', borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}
              >
                <Text style={{ fontSize: hp(2.7), color: 'white', fontWeight: 'bold' }}>Create Account</Text>
              </TouchableOpacity>
            )}
          </View>
          <View className="flex-row justify-center">
            <Text style={{ fontSize: hp(1.8) }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('signIn')}>
              <Text style={{ fontSize: hp(1.8) }} className="font-semibold text-blue-600">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  )
}
