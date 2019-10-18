'use strict';
let React = require('react-native');
let {StyleSheet} = React;
const theme = require('./themeColors.json');

module.exports = StyleSheet.create({

    containers: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    header: {
        backgroundColor: theme.primaryColor
    },

    headerStyled: {
        backgroundColor: theme.primaryColor,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "center"
    },

    labelMap: {
        top: 20,
        backgroundColor: theme.primaryColor,
        width: 106, height: 22,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bulletpoint: {
        color: theme.tertiaryColor, fontSize: 10, padding: 10
    },

    listItem: {
        borderBottomWidth: 0,
        paddingRight: 20,
        marginHorizontal: 40
    },

    ExtraToursCard: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },

    bannerCard: {
        width: "90%",
        aspectRatio: 2 / 1.4,
        flexDirection: "column",
        borderRadius: 4
    },

    loginContent: {
        width: "100%",
        height: "100%",
        paddingHorizontal: "5%",
        marginTop: "-10%"
    },

    loginImageBackground: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        borderBottomWidth: 0
    },

    loginInput: {
        width: "100%",
        color: "#FFF",
        height: "100%",
        paddingRight: 8,
    },

    loginButton: {
        backgroundColor: theme.primaryColor,
        justifyContent: "center",
        borderRadius: 6,
        height: "100%",
        width: "30%",
    },

    GridViewContainer: {
        width: "71%",
        aspectRatio: 0.69,
        flex: 1,
        flexDirection: "column",
        padding: "1.5%",
    },

    listCardImage: {
        width: "100%",
        height: "100%",
    },

    rectangle_color: {
        backgroundColor: theme.noteBackground,
        margin: 20,
        padding: 10
    },

    noteCard: {
        backgroundColor: theme.noteCard,
        margin: 20,
        padding: 10
    },

    backImage: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    accordionTitle: {
        color: "#3E3E3E",
        fontWeight: 'bold'
    },

    accordionHeader: {
        width: '80%',
        height: 45,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6
    },

    iconAccordionHeader: {
        width: '20%',
        height: 45,
        backgroundColor: theme.primaryColor,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        justifyContent: 'center',
        alignItems: "center",
    },

    accordionCollapse: {
        backgroundColor: "#F5F5F5",
        padding: 10,
        marginHorizontal: 10
    },
    cardExtraTour: {
        backgroundColor: '#EBECEC',
        justifyContent: 'center',
        position: "absolute",
        width: "90%",
    }
});