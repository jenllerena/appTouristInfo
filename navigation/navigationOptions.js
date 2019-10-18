import React from "react";
import {LogoHeader} from "../components/utils/LogoHeader";
import {View} from "react-native";
import LogOut from "../screens/Login/logout";

const theme = require('../styles/themeColors.json');

export const NavigationOptions = (navigation) => {
    return {
        headerTitle: LogoHeader,
        headerStyle: {
            backgroundColor: theme.primaryColor,
        },
        headerLeft: (<View/>),
        headerRight: (
            <LogOut navigation={navigation}/>
        ),
    }
};