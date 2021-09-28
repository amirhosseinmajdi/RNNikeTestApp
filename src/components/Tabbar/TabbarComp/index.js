import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const TabbarComp = (props) => {
    const handleTabPressed = (tabNumber) => {
        if (tabNumber == 0) {
            props.homeTabPressed();
        } else {
            props.finishedTabPressed();
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.tabbarBase}>
                <View style={styles.tab}>
                    <Ionicons
                        name={props.tabnumber == 0 ? "md-alarm-outline" : "md-alarm-sharp"}
                        size={23}
                        color={'black'}
                        style={styles.tabIcon}
                        onPress={() => handleTabPressed(1)}
                    />
                </View>
                <View style={styles.tab}>
                    <Ionicons
                        name={props.tabnumber == 1 ? "md-home-outline" : "md-home-sharp"}
                        size={23}
                        color={'black'}
                        style={styles.tabIcon}
                        onPress={() => handleTabPressed(0)}
                    />
                </View>
            </View>
        </View>
    )
}

export default TabbarComp
