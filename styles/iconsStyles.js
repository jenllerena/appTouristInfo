'use strict';

let React = require('react-native');
let {Platform, StyleSheet} = React;

const iconsStyles = Platform.OS === 'ios' ? 60 : 50;

module.exports = StyleSheet.create({
    rectangle_8x7: {
        backgroundColor: '#EBECEC',
        width: 56,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GridViewContainer: {
        width: "65%",
        aspectRatio: 1,
        flex: 1,
        flexDirection: "column",
        padding: "2%"
    },
    bigSquare: {
        backgroundColor: '#EBECEC',
        width: "100%",
        aspectRatio: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    circleIcon: {
        backgroundColor: '#EBECEC',
        width: 100,
        height: 100,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    viewTabBar: {
        zIndex: 0,
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    badgeIcon: {
        display: "flex",
        position: 'absolute',
        right: 20,
        bottom: 19,
        backgroundColor: "#FF7D04",
        borderRadius: 9,
        width: 18,
        height: 18,
        justifyContent: "center",
        alignItems: 'center'
    }
});