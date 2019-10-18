'use strict';
import RF from "react-native-responsive-fontsize"

let React = require('react-native');
let {StyleSheet, Platform} = React;

const fontSize = Platform.OS === 'ios' ? 18 : 15;

module.exports = StyleSheet.create({
    fontSize: {
        fontSize: fontSize,
    },
    mapDescription: {
        fontSize: 12,
        justifyContent: "center",
        textAlign: "center",
        marginHorizontal: 20
    },
    titleHeader: {
        color: "#FFF",
        fontSize: RF(3.7),
        fontWeight: "bold",
    },
    title_1: {
        fontSize: RF(3.9),
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "normal",
        fontFamily: "Roboto",
        justifyContent: "center",
        color: "#3E3E3E",
        margin: 15,
    },
    title_2: {
        fontSize: RF(2.8),
        textAlign: "left",
        justifyContent: "center",
        color: "#3E3E3E",
        marginLeft: 16
    },
    bodyText: {
        fontSize: RF(2.8),
        marginHorizontal: 30,
        textAlign: "center",
        fontFamily: "Roboto",
        lineHeight: 21,
        justifyContent: "center",
        color: "#3C3C3C",
    },
    iconText: {
        marginTop: 3,
        color: "#3E3E3E",
        fontSize: RF(1.5),
        textAlign: "center",
        marginHorizontal: 10
    },
    titleButtonInfo: {
        fontSize: RF(2),
    },
    footerText: {
        fontSize: RF(1.5)
    }
});