import { StyleSheet } from "react-native"

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        topHeader: {
            width: '100%',
            height: "20%",
            justifyContent: "center",
            alignItems: "center"
        },
        firstLineText: {
            fontSize: 40,
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        },
        secondLineText: {
            fontSize: 40,
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        },
        animatedBaseView: {
            width: "100%",

            backgroundColor: '#f6f6f6',
            marginTop: 10, marginBottom: 10,
            borderRadius: 20,
        },
        animatedTouchable: {
            borderRadius: 20,
            flexDirection: "row",
            width: "100%",
            height: "100%"
        },
        viewSectionOne: {
            width: "10%",
            height: "100%"
        },
        cardItemBase: {
            width: "50%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        cardNameText: {
            fontSize: 20,
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        },
        cardStatusText: {
            fontSize: 15,
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: 'green'
        },
        cardImageBase: {
            width: "30%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
        },
        cardImage: {
            width: "90%",
            height: "50%"
        },
        animatedBaseFlatlist: {
            width: "100%",
            height: "80%",
            justifyContent: "center",
            alignItems: "center"
        },
        animatedFlatList: {
            width: '90%'
        },

    }
)