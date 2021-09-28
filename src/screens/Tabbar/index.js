import React, { useState, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import FinishedComp from '../../components/Tabbar/FinishedComp'
import TabbarComp from '../../components/Tabbar/TabbarComp'
import styles from './styles'
import MainScreen from './../MainScreen'
const Tabbar = (props) => {
    const [tab, setTab] = useState(0);
    const homeTabPressed = () => {
        setTab(0)
    }
    const finishedTabPressed = () => {
        setTab(1)
    }
    useEffect(() => {
        console.warn(props.goToFinishTab)
        if (props.goToFinishTab) {
            setTab(1);
        } else {
            setTab(0)
        }
    }, [props.goToFinishTab])
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden />
            <View style={styles.container}>
                {tab == 1 ?
                    <FinishedComp />
                    :
                    <MainScreen />
                }
            </View>
            <View style={styles.baseTabbar}>
                <TabbarComp
                    homeTabPressed={() => homeTabPressed()}
                    finishedTabPressed={() => finishedTabPressed()}
                    tabnumber={tab} />
            </View>
        </View>
    )
}

export default Tabbar
