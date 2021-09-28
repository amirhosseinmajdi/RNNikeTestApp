import React from 'react'
import { View, Text, Image } from 'react-native'
import Modal from "react-native-modal";
import SentGif from './../../../assets/iconImages/SentGif.gif';
import styles from "./styles"
const LocationMessage = "Your Location Registered Successfully!";
const ModalComp = (props) => {
    return (
        <>
            <Modal isVisible={props.showFinishModal}>
                <View style={styles.modalBase}>
                    <Image source={SentGif} style={styles.modalGif} />
                    <Text style={styles.message}>{LocationMessage}</Text>
                </View>
            </Modal>
        </>
    )
}

export default ModalComp
