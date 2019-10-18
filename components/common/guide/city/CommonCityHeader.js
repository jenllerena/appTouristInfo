import React, {Component} from "react";
import {ImageBackground, Text} from "react-native";
import {Row} from "react-native-easy-grid";
import {Left, Right} from "native-base";
import {Entypo} from "@expo/vector-icons";

const fontStyles = require("../../../../styles/fontStyles");

export default class CommonCityHeader extends Component {
    render() {
        return (
            <ImageBackground
                style={{width: "100%", height: 120}}
                source={this.props.image}
            >
                <Row style={{paddingLeft: 20, paddingRight: 19}}>
                    <Left style={{flexDirection: "row"}}>
                        <Text style={[fontStyles.titleHeader]}>{this.props.title}</Text>
                    </Left>
                    <Right style={{flexDirection: "row", justifyContent: "flex-end"}}>
                        <Entypo name="location-pin"
                                size={32}
                                color="#FFF"/>
                        <Entypo
                            style={{marginLeft: 8}}
                            name="heart-outlined"
                            size={32}
                            color="#FFF"
                        />
                    </Right>
                </Row>
            </ImageBackground>
        )
    }
}