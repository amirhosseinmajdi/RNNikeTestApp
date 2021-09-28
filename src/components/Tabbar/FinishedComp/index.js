import React, { useEffect } from 'react'
import { View, Dimensions, Animated, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import FinishedCompData from './../../../DummyData/FinishedComp';
const FinishedComp = () => {
    const delay = 30;
    const dh = Dimensions.get('screen').height;
    const dw = Dimensions.get('screen').width;
    const ITEM_SIZE = (dh / 20) * 3;
    const scrollY = React.useRef(new Animated.Value(0)).current;
    useEffect(
        () => {
            let timer1 = setInterval(() =>
                console.warn('DATA UPDATED')
                , delay * 1000);
            return () => {
                clearTimeout(timer1);
            };
        }, []);
    return (
        <View style={styles.container}>
            <View style={styles.topHeader}>
                <Text style={styles.firstLineText}>ORDER</Text>
                <Text style={styles.secondLineText}>HISTORY</Text>
            </View>
            <View style={styles.animatedBaseFlatlist}>
                <Animated.FlatList
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    data={FinishedCompData}
                    renderItem={({ item, index }) => {
                        const inputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 2)
                        ]
                        const opacityInputRange = [
                            -1,
                            0,
                            ITEM_SIZE * index,
                            ITEM_SIZE * (index + 1)
                        ]
                        const scale = scrollY.interpolate({
                            inputRange,
                            outputRange: [1, 1, 1, 0]
                        })
                        const opacity = scrollY.interpolate({
                            inputRange: opacityInputRange,
                            outputRange: [1, 1, 1, 0]
                        })
                        return <Animated.View style={[styles.animatedBaseView,
                         { opacity, transform: [{ scale }], height: ITEM_SIZE, }]}>
                            <TouchableOpacity style={styles.animatedTouchable} activeOpacity={1}>
                                <View style={styles.viewSectionOne}></View>
                                <View style={styles.cardItemBase}>
                                    <Text style={styles.cardNameText}>{item.name}</Text>
                                    <Text style={styles.cardStatusText}>{item.status}</Text>
                                </View>
                                <View style={styles.cardImageBase}>
                                    <Image style={styles.cardImage} source={item.image} />
                                </View>
                                <View style={styles.viewSectionOne}></View>
                            </TouchableOpacity>
                        </Animated.View>
                    }
                    }
                    style={styles.animatedFlatList}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyboardShouldPersistTaps={'always'}
                />
            </View>
        </View>
    )
}

export default FinishedComp
