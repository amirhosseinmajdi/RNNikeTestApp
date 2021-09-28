import React, { useRef } from 'react'
import { View, Image, FlatList, StatusBar, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import footPrint from './../../assets/footprint.png';
import productsingle from './../../assets/productsingle1.png';
const ProductScreen = () => {
    const data = [{}, {}]
    const flatListRef = useRef(null)
    const handleScroll = (targetIndex) => {
        flatListRef.current.scrollToIndex({ animated: true, index: targetIndex });
    }
    const RenderSecond = (item) => {
        return (
            <>
                <View style={styles.renderSecondFloatingButton}>
                    <TouchableOpacity style={styles.renderSecondFloatingButtonTouchable} activeOpacity={1} onPress={() => handleScroll(0)}>
                        <Ionicons
                            name={"chevron-up-sharp"}
                            size={30}
                            color={'black'}
                            style={styles.renderSecondFloatingButtonIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.renderSecondBase}>
                    <View style={styles.renderSecondTopSection}>
                        <View style={styles.renderSecondTitle}>
                            <Text style={styles.renderSecondTitleText}>My Feet</Text>
                        </View>
                        <View style={styles.renderSecondImageBase}>
                            <Image style={styles.renderSecondImage} source={footPrint} />
                        </View>
                        <View style={styles.renderSecondSizeBase}>
                            <View style={styles.renderSecondSizeParent}>
                                <View style={styles.renderSecondSizeSections}>
                                    <View style={styles.renderSecondSizeSectionsText}>
                                        <Text style={styles.renderSecondSizeLeft}>Left</Text>
                                    </View>
                                    <View style={styles.renderSecondSizeLeftDetailBase}>
                                        <View style={styles.renderSecondSizeLeftDetailL}>
                                            <Text style={styles.renderSecondSizeLeftDetailLText}>L</Text>
                                        </View>
                                        <View style={styles.renderSecondSizeLeftDetailLValue}>
                                            <Text style={styles.renderSecondSizeLeftDetailLWText}>206mm</Text>
                                        </View>
                                        <View style={styles.renderSecondSizeLeftDetailW}>
                                            <Text style={styles.renderSecondSizeLeftDetailWText}>W</Text>
                                        </View>
                                        <View style={styles.renderSecondSizeLeftDetailWValue}>
                                            <Text style={styles.renderSecondSizeLeftDetailLWText}>38mm</Text>
                                        </View>
                                    </View>
                                </View>
                                <View
                                    style={styles.renderSecondSeperator}
                                />
                                <View style={styles.renderSecondSizeSections}>
                                    <View style={styles.renderSecondSizeRight}>
                                        <Text style={styles.renderSecondSizeRightText}>Right</Text>
                                    </View>
                                    <View style={styles.renderSecondSizeLeftDetailBase}>
                                        <View style={styles.renderSecondSizeLeftDetailL}>
                                            <Text style={styles.renderSecondSizeLeftDetailLText}>L</Text>
                                        </View>
                                        <View style={styles.renderSecondSizeLeftDetailLValue}>
                                            <Text style={styles.renderSecondSizeLeftDetailLWText}>206mm</Text>
                                        </View>
                                        <View style={styles.renderSecondSizeLeftDetailW}>
                                            <Text style={styles.renderSecondSizeLeftDetailLText}>W</Text>
                                        </View>
                                        <View style={styles.renderSecondSizeLeftDetailWValue}>
                                            <Text style={styles.renderSecondSizeLeftDetailLWText}>38mm</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buyButtonBase}>
                        <TouchableOpacity onPress={() => Actions.mapscreen()} activeOpacity={1} style={styles.buyButtonTouchable}>
                            <Text style={styles.buyButtonText}><Ionicons
                                name={"cart-outline"}
                                size={27}
                                color={'#fff'}
                                style={styles.buyButtonIcon}
                            /> Buy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
    const RenderFirst = () => {
        return (
            <>
                <View style={styles.renderFirstFloatingButtonBase}>
                    <TouchableOpacity style={styles.renderFirstFloatingButtonTouchable} activeOpacity={1} onPress={() => handleScroll(1)}>
                        <Text style={styles.renderFirstFloatingButtonText}>MORE DETAILS</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.renderFirstTopParent}>
                    <View style={styles.renderFirstTopBase}>
                        <Text style={styles.renderFirstTopFirstText}>Time Left To Enter</Text>
                        <Text style={styles.renderFirstTopSecondText}>02:17</Text>
                    </View>
                    <View style={styles.renderFirstTopHeaderBase}>
                        <View style={styles.renderFirstTopHeaderParent}>
                            <Text style={styles.renderFirstTopHeaderTitle}>AIR JORDAN 1</Text>
                            <Text style={styles.renderFirstTopHeaderDescription}>THE ORIGINATOR</Text>
                        </View>
                        <View style={styles.renderFirstImageBase}>
                            <Image style={styles.renderFirstImage} source={productsingle} />
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <FlatList
                ref={flatListRef}
                snapToAlignment={"top"}
                viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
                pagingEnabled={true}
                data={data}
                decelerationRate={"fast"}
                renderItem={({ item, index }) =>
                    <>
                        {index == 1 ?
                            <RenderSecond item={item} />
                            :
                            <RenderFirst item={item} />
                        }
                    </>
                }
            />
        </View>
    )
}
export default ProductScreen
