import React from "react";
import {Image} from "react-native";

export const LogoHeader = () => {
    return (
        <Image
            style={{
                width: 160, height: 40, borderColor: "black",
                marginLeft: "auto",
                marginRight: "auto",
            }}
            source={require("../../assets/images/logos/PeruHopLogo.png")}
        />
    )
};