import React, {Component,} from 'react';
import {Platform, StatusBar, StyleSheet, View,} from 'react-native';

const utilsStyles = require("../../../../../styles/utilsStyles");

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
        <StatusBar translucent
                   backgroundColor={backgroundColor} {...props} />
    </View>
);

export default class CustomStatusBar extends Component {
    render() {
        return (
            <View>
                <MyStatusBar backgroundColor={utilsStyles.statusbar}
                             barStyle="light-content"/>
            </View>
        );
    }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    }
});