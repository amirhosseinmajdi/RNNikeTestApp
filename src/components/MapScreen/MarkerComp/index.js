import React from 'react'
import { View, Image } from 'react-native'
import marker from './../../../assets/iconImages/marker.png';
import styles from "./styles"

const MarkerComp = () => {
    return (
        <>
            <View style={styles.markerFixed} pointerEvents="none">
                <Image style={styles.marker} source={marker} />
            </View>
        </>
    )
}

export default MarkerComp
