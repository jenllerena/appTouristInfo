import React, {Component} from "react";
import {Image} from "react-native";
import {Container, Content, Label, View} from "native-base";

const fontStyles = require("../../../../styles/fontStyles");

export default class BorderCrossingInfo extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Label style={fontStyles.title_1}>
                        Border Crossing
                    </Label>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require("../../../../assets/images/tours/border1-01.png")}
                               style={{width: "90%",height:200}}
                               resizeMode="contain"/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require("../../../../assets/images/tours/border2-01.png")}
                               style={{width: "90%",height:300}}
                               resizeMode="contain"/>
                    </View>
                </Content>
            </Container>

        )
    }
};