import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'
import { setItem } from '../utils/asyncStorage';

const { width, height } = Dimensions.get('window')

export default function OnboardingScreen({ navigation }) {
    const handleDone = () => {
        try {
            navigation.navigate('Home');
        } catch (error) {
            console.error('Navigation error:', error);
        }
        setItem('onboarded', '1');
    }
    const Done = ({ ...props }) => {
        return (<TouchableOpacity style={styles.doneButton}  {...props}>
            <Text style={{ color: 'white' }} >Done</Text>
        </TouchableOpacity>)

    }

    return (
        <View style={styles.container}>
            <Onboarding
                containerStyles={{ padding: 15 }}
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight={false}

                // DotComponent={Square}
                // NextButtonComponent={Next}
                // SkipButtonComponent={Skip}
                DoneButtonComponent={Done}
                // titleStyles={{ color: 'blue' }} // set default color for the title
                pages={[
                    {
                        backgroundColor: '#a7f3d0',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/boost.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: `Let's get you started`,
                        // titleStyles: { color: 'red' }, // overwrite default color
                    },
                    {
                        backgroundColor: '#fef3c7',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/work.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work seamlessly done without interruptions',
                    },
                    {
                        backgroundColor: '#a78bfa',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView source={require('../assets/animations/achieve.json')} autoPlay loop />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'Get things done quicker and better to achieve your goals',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    doneButton: {
        padding: 20,
        color: 'white'
        // backgroundColor: 'white',
        // borderTopLeftRadius: 100,
        // borderBottomLeftRadius: 100
    }

})