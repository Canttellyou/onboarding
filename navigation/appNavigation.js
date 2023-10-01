import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/OnboardingScreen'
import { getItem } from '../utils/asyncStorage'
import HomeScreen from '../screens/HomeScreen'
import TestScreen from '../screens/TestScreen'

const Stack = createNativeStackNavigator()


export default function AppNavigation() {
    const [showOnboarding, setShowOnboarding] = useState(null);
    useEffect(() => {
        checkIfAlreadyOnboarded();
    }, [])

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            // hide onboarding
            setShowOnboarding(false);
        } else {
            // show onboarding
            setShowOnboarding(true);
        }
    }

    if (showOnboarding == null) {
        return null;
    }


    if (showOnboarding) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Onboarding' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    {/* <Stack.Screen name="test-screen" component={TestScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, animation: "slide_from_right", }}>
                    <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={OnboardingScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    {/* <Stack.Screen name="test-screen" component={TestScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({})