import React, { useEffect } from 'react'
import { ImageBackground, ActivityIndicator } from 'react-native';
import { StatusBar } from 'react-native';
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import splash from './../../assets/splash3.png';
const Splash = () => {
    useEffect(() => {
        setTimeout(() => {
            Actions.tabbar();
        }, 3000);
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#333333"
                barStyle="light-content"
            />
            <ImageBackground style={styles.splashImage} source={splash}>
                <ActivityIndicator style={styles.activityIndicator} color={"#fff"} />
            </ImageBackground>
        </View>


    )
}

export default Splash
