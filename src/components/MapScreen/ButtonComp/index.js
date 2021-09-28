import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./styles"
const ButtonComp = (props) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => props.getLocationPoint()}
                style={styles.sendButton}>
                <Text style={styles.pinText}>ٍPin Location</Text>
            </TouchableOpacity>
        </>
    )
}

export default ButtonComp

