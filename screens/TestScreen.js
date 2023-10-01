import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

import { removeItem } from '../utils/asyncStorage';


const { width, height } = Dimensions.get('window');
export default function TestScreen({ navigation }) {

    const handleReset = async () => {
        await removeItem('onboarded');
        navigation.navigate('Onboarding');
    }

    return (
        <View style={styles.container}>
            <View style={styles.lottie}>
                <LottieView source={require('../assets/animations/confetti.json')} autoPlay loop />
            </View>
            <Text style={styles.text}>Home Page</Text>
            <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    text: {
        fontSize: width * 0.09,
        marginBottom: 20
    },
    resetButton: {
        backgroundColor: '#34d399',
        padding: 10,
        borderRadius: 10
    }
})