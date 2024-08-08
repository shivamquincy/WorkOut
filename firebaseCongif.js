// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getReactNativePersistence ,initializeAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8u2q9rJm-e9CFsNQ39-n5cmFR_jiZHKM",
  authDomain: "vamfit.firebaseapp.com",
  projectId: "vamfit",
  storageBucket: "vamfit.appspot.com",
  messagingSenderId: "499221106444",
  appId: "1:499221106444:web:f8cfadeffeedb45cfa4329"
};
// React-native firebase // rn  firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})


export const db = getFirestore(app);
export const userRef = collection(db,'users');
export const workoutRef = collection(db, 'workouts')
export const listRef = collection(db,'lists')