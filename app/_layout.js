import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import "../global.css"
import {useRouter, Stack, useSegments} from "expo-router";
import {  AuthContextProvider, useAuth } from '../context/authContext';
const MainLayout = () => {
    const { isAuthenticated } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (typeof isAuthenticated === 'undefined') return;

        // Correctly compare segments[0] with 'app' using strict equality
        const inApp = segments[0] === 'app';

        if (isAuthenticated && !inApp) {
            // Redirect to home if authenticated and not already in the app section
            router.replace('home');
        } else if (isAuthenticated === false) {
            // Redirect to signIn if not authenticated
            router.replace('signIn'); // change to signIn later
        }
    }, [isAuthenticated]);

    return <Stack  />;
};


export default function RootLayout() {
    return (
        <AuthContextProvider>
        <MainLayout />
        </AuthContextProvider>
    )
}
