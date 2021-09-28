import { StyleSheet, Dimensions } from "react-native"
const dh = Dimensions.get('window').height;
const dw = Dimensions.get('window').width;

export default StyleSheet.create(
    {
        container: {
            width: '100%', height: '100%', backgroundColor: 'blue'
        },
        renderSecondFloatingButton: {
            zIndex: 1001,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#fff',
            position: 'absolute',
            top: 10,
            right: 10,
        },
        renderSecondFloatingButtonTouchable: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondFloatingButtonIcon: {
            padding: 0,
            color: '#000'
        },
        renderSecondBase: {
            width: "100%",
            height: dh,
            backgroundColor: '#0e1728'
        },
        renderSecondTopSection: {
            width: '100%',
            height: dh - dh / 6
        },
        renderSecondTitle: {
            width: '100%',
            height: '20%'
        },
        renderSecondTitleText: {
            fontSize: 25,
            color: '#e2e6f2',
            marginLeft: 10,
            marginTop: 10,
            padding: 0,
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        },
        renderSecondImageBase: {
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondImage: {
            width: dh / 2.5,
            height: dh / 2.5
        },
        renderSecondSizeBase: {
            width: '100%',
            height: '30%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondSizeParent: {
            width: '90%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        renderSecondSizeSections: {
            width: '100%',
            height: '49.8%',
            flexDirection: 'row'
        },
        renderSecondSizeSectionsText: {
            width: '24%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondSizeLeft: {
            fontSize: 13,
            color: '#fff',
            fontWeight: 'bold'
        },
        renderSecondSizeLeftDetailBase: {
            width: '72%',
            height: '100%',
            justifyContent: 'center',
            flexDirection: 'row'
        },
        renderSecondSizeLeftDetailL: {
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondSizeLeftDetailLText: {
            fontSize: 13,
            color: '#1439c8',
            fontWeight: 'bold'
        },
        renderSecondSizeLeftDetailLValue: {
            width: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondSizeLeftDetailW: {
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondSizeLeftDetailWText: {
            fontSize: 13,
            color: '#1439c8',
            fontWeight: 'bold'
        },
        renderSecondSizeLeftDetailWValue: {
            width: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondSizeLeftDetailLWText: {
            fontSize: 13,
            color: '#fff'
        },



        renderSecondSeperator: {
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            width: '85%',
            height: '0.2%'
        },


        renderSecondSizeRight: {
            width: '24%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderSecondSizeRightText: {
            fontSize: 13,
            color: '#fff',
            fontWeight: 'bold'
        },


        buyButtonBase: {
            width: '100%',
            height: dh / 6,
            justifyContent: 'center',
            alignItems: 'center'
        },
        buyButtonTouchable: {
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold',
            width: dw / 1.25,
            height: dh / 15,
            backgroundColor: '#4ac500',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        buyButtonText: {
            fontSize: 25,
            color: '#fff',
            padding: 0,
            width: '100%',
            textAlign: 'center',
            padding: 0
        },
        buyButtonIcon: {
            padding: 0,
            fontWeight: 'bold'
        },

        renderFirstFloatingButtonBase: {
            zIndex: 1001,
            width: dh / 5,
            height: dh / 14,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: '#f7f7f7',
            position: 'absolute',
            bottom: 10,
            left: 10,
        },
        renderFirstFloatingButtonTouchable: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderFirstFloatingButtonText: {
            fontSize: 14,
            color: 'black',
            padding: 0,
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center',
            padding: 0
        },
        renderFirstTopParent: {
            width: "100%",
            height: dh
        },
        renderFirstTopBase: {
            backgroundColor: 'black',
            width: '100%',
            height: dh / 5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderFirstTopFirstText: {
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
        },
        renderFirstTopSecondText: {
            fontSize: 55,
            color: 'white',
            fontWeight: 'bold'
        },
        renderFirstTopHeaderBase: {
            width: '100%',
            height: dh - dh / 5,
            backgroundColor: '#f7f7f7'
        },
        renderFirstTopHeaderParent: {
            width: '100%',
            height: '20%'
        },
        renderFirstTopHeaderTitle: {
            fontSize: 15,
            color: '#313032',
            marginTop: 10,
            marginLeft: 10,
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        },
        renderFirstTopHeaderDescription: {
            fontSize: 35,
            color: 'black',
            marginLeft: 10,
            padding: 0,
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        },
        renderFirstImageBase: {
            width: '100%',
            height: '70%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        renderFirstImage: {
            width: dh / 2,
            height: dh / 2.8
        },
    }
)